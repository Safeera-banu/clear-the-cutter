const fs = require("fs")
const path = require("path")



function organize(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    console.log("No Directory Found")
    return
  }
  const files = fs.readdirSync(directoryPath)

  files.forEach((file) => {
    const fullPath = path.join(directoryPath, file)
    const fileExtension = path.extname(file).slice(1)
    const folder=path.join(directoryPath,fileExtension)
    
    if (fileExtension != "js" && fileExtension != "json"){
    
    if(!fs.existsSync(folder)){
      fs.mkdirSync(folder)
    }
    const finalFolder = path.join(folder,file)
    fs.renameSync(fullPath,finalFolder)
  }
  })
 
}

directoryPath = "C:/Users/demo/Desktop/saf/node-learn/clear-clutter/"
organize(directoryPath)