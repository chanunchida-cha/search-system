export const showPDFFile = async (type: string, message: string, setS3url: (s3url: string) => void) => {
    const AWS = require("aws-sdk");
    const bucketName = process.env.NEXT_PUBLIC_MINIO_BUCKET_NAME?.toString();
    let pdfUrl;
    let afterUrl;
    // const bucketName = "researcher/assessment";

    pdfUrl = `${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/${process.env.NEXT_PUBLIC_MINIO_BUCKET}/${message}`;
    afterUrl = pdfUrl!.substring(
        pdfUrl!.indexOf(bucketName!) + bucketName!.length
    );


    await AWS.config.update({
        accessKeyId: process.env.NEXT_PUBLIC_MINIO_ASSESS_KEY,
        secretAccessKey: process.env.NEXT_PUBLIC_MINIO_SECRET_KEY,
        region: process.env.NEXT_PUBLIC_MINIO_REGION,
        endpoint: process.env.NEXT_PUBLIC_MINIO_ENDPOINT,

        // accessKeyId: "FLBWWX6CMZ6LGFE85QGZ",
        // secretAccessKey: "tGy7i12hLpRpaTUB3OIPDP2Fb52OHRM7Rrlvjdek",
        // region: "us-east-1",
        // endpoint: "https://uat-s3.universityapp.net",

        s3ForcePathStyle: true, // needed with minio?
        signatureVersion: "v4",
    });
    const s3 = new AWS.S3();
    await s3.getObject(
        {
            Bucket: process.env.NEXT_PUBLIC_MINIO_BUCKET,
            // Bucket: "researcher/assessment",
            Key: afterUrl,
            // Key: "upload/20230330172204-12345.png",
        },
        function (error: any, data: any) {
            if (error != null) {
                console.log("Failed data.Body");
                setS3url("");
            } else {
                console.log("data.Body");
                console.log("Show Data ",data.Body);
                var asdasd = "data:image/jpeg;base64," + encode(data.Body);
                // var asdasd = "data:certificate.pdf," + encode(data.Body);
                // let link = document.createElement("a");
                // link.href = self.s3url;
                //   link.download = "certificate.pdf";
                // link.click();
                setS3url(asdasd);
            }
        }
    );
};


const encode = (data: number[]) => {
    const str = data.reduce(function (a, b) {
        return a + String.fromCharCode(b);
    }, "");
    return btoa(str).replace(/.{76}(?=.)/g, "$&\n");
};
