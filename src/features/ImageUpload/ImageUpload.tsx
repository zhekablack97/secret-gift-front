import { useUploadImageMutation } from "@/api/upload/uploadService";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface UploadFormValues {
  image: FileList;
}

interface IImageUpload {
  onSuccess?: (id: number, url: string, width: number, height: number) => void;
}

export const ImageUpload: FC<IImageUpload> = ({ onSuccess }) => {
  const [uploadImage, { isLoading, isSuccess, data, error }] =
    useUploadImageMutation();
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { isDirty },
  } = useForm<UploadFormValues>();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleUpload = async (formData: UploadFormValues) => {
    if (formData.image && formData.image.length > 0) {
      const file = formData.image[0];
      const data = new FormData();
      data.append("files", file);

      try {
        await uploadImage(data)
          .unwrap()
          .then((res) => {
            const { url, width, height } = res[0].formats.small;
            onSuccess && onSuccess(res[0].id, url, width, height);
          });
        setPreviewUrl(URL.createObjectURL(file)); // Предварительный просмотр локального файла
      } catch (err) {
        console.error("Error uploading image:", err);
      }
    }
  };

  const handleClear = () => {
    reset(); // Очищает форму
    setPreviewUrl(null); // Убирает предварительный просмотр
  };

  return (
    <Dialog>
      <DialogTrigger>download picture</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <form onSubmit={handleSubmit(handleUpload)}>
              <div>
                <Controller
                  name="image"
                  control={control}
                  rules={{ required: "Please select a file" }}
                  render={({ field }) => (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        field.onChange(e.target.files);
                        if (e.target.files && e.target.files.length > 0) {
                          setPreviewUrl(URL.createObjectURL(e.target.files[0]));
                        }
                      }}
                    />
                  )}
                />
              </div>

              <button type="submit" disabled={isLoading || !isDirty}>
                {isLoading ? "Uploading..." : "Upload Image"}
              </button>
              <button type="button" onClick={handleClear} disabled={isLoading}>
                Clear
              </button>
            </form>
            {previewUrl && (
              <div>
                <h3>Preview</h3>
                <Image
                  width={200}
                  height={200}
                  src={previewUrl}
                  alt="Preview"
                />
              </div>
            )}
            {isSuccess && data && (
              <div>
                <h3>Upload Success</h3>
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVICE_URL}${data[0].formats.small.url}`}
                  width={data[0].formats.small.width}
                  height={data[0].formats.small.height}
                  alt="Uploaded image"
                  style={{ width: "200px" }}
                />
              </div>
            )}
            {error && <p>Error occurred while uploading the image</p>}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
