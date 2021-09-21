export const config = {
  "postgres": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_USERNAME,
    "database": process.env.POSTGRESS_USERNAME,
    "host": process.env.POSTGRESS_HOST,
    "dialect": process.env.POSTGRESS_DIALECT,
    "aws_region": process.env.POSTGRESS_AWS_REGION,
    "aws_profile": process.env.POSTGRESS_AWS_PROFILE,
    "aws_media_bucket": process.env.POSTGRESS_AWS_MEDIA_BUCKET
    }
}

//"username": "udagramMEdev",
//"password": "udagramMEdev",
//"database": "udagramMEdev",
//"host": "udagrammedev.corwjc38fu0h.us-east-1.rds.amazonaws.com",
//"dialect": "postgres",
//"aws_region": "us-east-1",
//"aws_profile": "default",
//"aws_media_bucket": "udagram-me-dev"
  //  ,
  //"prod": {
  //  "username": "",
  //  "password": "",
  //  "database": "udagram_prod",
  //  "host": "",
  //  "dialect": "postgres"
  //}
//}
