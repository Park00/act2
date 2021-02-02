---
description: 리액트 서비스 도커라이즈
---

# 도커 환경 구성하기

1. Docker hub 가
   1. [https://hub.docker.com/](https://hub.docker.com/) 사이트에서 가입합니다.
   2. Docker Image 를 올리거나 관리하기 위해서는 필요합니다.
   3. Docker hub가 아니더라도 다른 클라우드 서비스에서 제공되는 Container Registry 서비스를 활용 할 수 있습니다.
2. Docker 설치
   1. osx : homebrew 를 통해 설치합니다. [참고](https://dc7303.github.io/docker/2019/11/24/dockerInstallForMac/)
   2. windows : Docker hub 에서 설치파일을 다운받아서 설치합니다. \(Docker hub 계정 필요\)
3. Dockerfile 작성

```text
# 기본 이미지 설정
FROM node:14.15.3

# 작업 폴더 컨테이너 내부 폴더
WORKDIR /app

# /app/node_modules/.bin 경로를 $PATH 에 축
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
```

4. 실행방법\(다른 이미지가 없으므로 아래 Run  명령어만 작성해도 가능합니다.

```text
$docker run
```

