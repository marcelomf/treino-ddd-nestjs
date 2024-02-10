import { Module } from '@nestjs/common';
import fs from "node:fs";
import { PrismaService } from './services/prisma.service';

const controllers = [];
const providers = [PrismaService];

function capitalize(string: String) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function bootLoad(loadType: String) {
  const contexts = fs.readdirSync(`src/${loadType}`);
  for(const context of contexts) {
    if(!fs.lstatSync(`src/${loadType}/`+context).isDirectory()) {
      continue;
    }
    const files = fs.readdirSync(`src/${loadType}/${context}/`);
    for(const file of files) {
      if(!fs.lstatSync(`src/${loadType}/${context}/${file}`).isFile()) {
        continue;
      }

      if(loadType == "controllers") {
        if(!file.includes("controller")) {
          continue;
        }
        controllers.push(require(`./${loadType}/${context}/${file.replace(".ts", ".js")}`)[`${capitalize(file.split(".")[0])}Controller`]);
      } else {
        if(!file.includes("service")) {
          continue;
        }
        providers.push(require(`./${loadType}/${context}/${file.replace(".ts", ".js")}`)[`${capitalize(file.split(".")[0])}Service`]);
      }
    }
  }
}

bootLoad("controllers");

bootLoad("services");

@Module({
  imports: [],
  controllers: controllers,
  providers: providers,
})
export class AppModule {}
