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

4. 실행방법

1. 도커이미지를 생성합니다.

```text
$docker build --tag 이미지이름:버전 . <-----도커파일경로
$docker build --tag bbaaginae:1.0 . <----예
```

2. 도커 실.

```text
$docker run --rm bbaaginae:1.0
```

도커 실행시 옵션에 대해서는 공식 문서 또는 검색을 통해서 확인하는게 좋습니다.. 지금 현재 작성한 --rm 옵션은 로컬에서 테스트 및 확인하기 좋도록 도커 종료시 컨테이너를 삭제하도록 한 옵션입니다.

[참고](https://www.daleseo.com/docker-run/)

[공식 레퍼런스](https://docs.docker.com/engine/reference/commandline/run/)

