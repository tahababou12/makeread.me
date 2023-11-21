const rimraf = require("rimraf")
const OpenAPI = require("openapi-typescript-codegen")

const generate = async () => {
  await rimraf.rimraf("./src/api/generated")

  await OpenAPI.generate({
    exportCore: true,
    exportSchemas: false,
    exportServices: true,
    input: "http://localhost:8080/swagger.json",
    output: "./api/generated",
    clientName: "readMeGenerator",
  })

  console.log("Generated API client")
}

generate()
