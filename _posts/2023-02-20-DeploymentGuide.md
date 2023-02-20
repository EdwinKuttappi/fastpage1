---
toc: true
comments: false
layout: base
title: Changing Instances into Mortensen or Yeung server
author: Edwin Abraham
description: The Deployment Guide for those who made their own instance sent via slack by Mr. Mortensen into a blog post
image: /images/.png
categories: [week23, tri2]
---
<style>
    h1 {
        text-align: center;
        font-size: 35px;
        font-family: oxygen;
    }
    .text {
        color: #479ffb;
        font-size: 20px;
        border-width: 2.5px;
        border-style: solid;
        text-align: center;
    }
    .text2 {
        font-size: 15px;
        text-align: center;
    }
    .text3 {
        color: red;
        font-size: 18px;
        text-align: left;
    }
    .text4 {
        color: #f93535;
        font-size: 18px;
        text-align: center;
    }
    code {
        color: white;
        background-color: black;
    }
    .file {
        color: black;
    }
</style>
<h1>Changing Instance to under Mortensen or Yeung Servers</h1>
<div class="text">This blog post will detail how to make a new container under the Mortensen or Yeung machines</div>

# Step 1: Choosing a Port
```bash
sudo docker ps

CONTAINER ID   IMAGE                                    COMMAND                  CREATED        STATUS                          PORTS                                                 NAMES
4e8fd682c3b5   dolphins_v1                              "gunicorn main:app"      17 hours ago   Up 17 hours                     0.0.0.0:8090->8080/tcp, :::8090->8080/tcp             dolphins3_web_1
d12771409040   jame_v2                                  "gunicorn main:app"      2 days ago     Up 2 days                       0.0.0.0:8095->8086/tcp, :::8095->8086/tcp             p3_jame_web_1
0065cdbe0eb6   recipies_port_v1                         "gunicorn main:app"      2 days ago     Up 2 days                       0.0.0.0:8011->8086/tcp, :::8011->8086/tcp             recipiesflask_web_1
b68006ff922a   flask_port_v1                            "gunicorn main:app"      3 days ago     Up 3 days                       0.0.0.0:8199->8199/tcp, :::8199->8199/tcp             p4t5-p8199-flask-saakd_web_1
788376b446c0   a3389c4f670f                             "gunicorn main:app"      3 days ago     Up 3 days                       0.0.0.0:8051->8086/tcp, :::8051->8086/tcp             carhub_p4t9_web_1
6acdb6d366d3   flask_blewupflask_v1                     "gunicorn main:app"      3 days ago     Up 3 days                       0.0.0.0:8135->8080/tcp, :::8135->8080/tcp             blewupflask_web_1
e749e6510fb0   tgddkp_flask_v2                          "gunicorn main:app"      3 days ago     Up 3 days                       0.0.0.0:8069->8080/tcp, :::8069->8080/tcp             tgddkpflask_web_1
f5aff8b7b5a1   ssvg_port_v1                             "gunicorn main:app"      3 days ago     Up 3 days                       0.0.0.0:8123->8080/tcp, :::8123->8080/tcp             t8122_final_ssvg_flask_web_1
728e25c3c1ce   flow_v1                                  "gunicorn main:app"      3 days ago     Up 3 days                       0.0.0.0:8087->8087/tcp, :::8087->8087/tcp             gaccs-flask_web_1
5a5c67ec51ca   sizet2_port_v1                           "gunicorn main:app"      3 days ago     Up 3 days                       0.0.0.0:8929->8929/tcp, :::8929->8929/tcp             sizet2_flask_web_1
67c791756f45   tripleaj_port_v1                         "gunicorn main:app"      3 days ago     Up 3 days                       0.0.0.0:8099->8080/tcp, :::8099->8080/tcp             tripleajflask_web_1
75e03ba6297d   codecrunch_port_v1                       "gunicorn main:app"      3 days ago     Up 3 days                       127.0.0.1:4269->8086/tcp                              code-crunch-backend_web_1
15516aed08ee   8708d0f3e62b                             "gunicorn main:app"      5 days ago     Up 3 days                       0.0.0.0:8066->8080/tcp, :::8066->8080/tcp             groupa_web_1
daa4a256ece8   346331782f3e                             "gunicorn main:app"      10 days ago    Up 3 days                       0.0.0.0:8089->8080/tcp, :::8089->8080/tcp             dejmogroupflask_web_1
96e3f8703ef6   346331782f3e                             "gunicorn main:app"      11 days ago    Up 3 days                       0.0.0.0:8053->8080/tcp, :::8053->8080/tcp             hubcarp4t9_web_1
bdc08f9c95fc   lscr.io/linuxserver/webtop:ubuntu-xfce   "/init"                  4 weeks ago    Up 3 days                       0.0.0.0:3000->3000/tcp, :::3000->3000/tcp, 3389/tcp   webtop
1bd333f4f93c   ddns_ddns                                "/bin/sh -c '/go/bin…"   6 weeks ago    Up 3 days                                                                             ddns_ddns_1
a3de1a1fb1ac   redis:4-alpine                           "docker-entrypoint.s…"   6 weeks ago    Up 3 days                       6379/tcp                                              ddns_redis_1
01c989713817   java_springv1                            "java -jar target/sp…"   3 months ago   Up 3 days                       0.0.0.0:8085->8085/tcp, :::8085->8085/tcp             spring_portfolio_web_1
18f10e47abbc   flask_loopholegames_t42                  "gunicorn main:app"      3 months ago   Up 3 days                       0.0.0.0:8042->8080/tcp, :::8042->8080/tcp             t2p4_loopholegames_web_1
6b4b0355a561   flask_team_cheese_t8_v1                  "gunicorn main:app"      3 months ago   Up 3 days                       0.0.0.0:8071->8080/tcp, :::8071->8080/tcp             p3t8_ezkg_web_1
dc89f014f8f9   bb9b973d6f2e                             "gunicorn main:app"      3 months ago   Up 3 days                       0.0.0.0:8094->8080/tcp, :::8094->8080/tcp             p3t1_vase_web_1
5d73acae5c4b   346331782f3e                             "gunicorn main:app"      3 months ago   Up 3 days                       0.0.0.0:8034->8080/tcp, :::8034->8080/tcp             nbad_flask_web_1
a6f2e8fce6a5   image_sadv_v1                            "gunicorn main:app"      3 months ago   Up 3 days                       0.0.0.0:8037->8080/tcp, :::8037->8080/tcp             t7p3_sadv_web_1
ecc3c5f2aa1f   p4t0_music_flask_v1                      "gunicorn main:app"      3 months ago   Restarting (3) 58 seconds ago                                                         p4t0_music_web_1
ecf0125ae99e   flask_ssjn_v1                            "gunicorn main:app"      3 months ago   Up 3 days                       0.0.0.0:8032->8080/tcp, :::8032->8080/tcp             p3t2_ssjn_flask_web_1
e5288d9f1d48   98970bd83403                             "gunicorn main:app"      3 months ago   Up 3 days                       0.0.0.0:8035->8080/tcp, :::8035->8080/tcp             lawnmowers-flask-repo_web_1
5f7b2dd4425c   fr0st_v1                                 "gunicorn main:app"      3 months ago   Up 3 days                       0.0.0.0:8045->8080/tcp, :::8045->8080/tcp             p4t5_fr0st_web_1
65ac9aa7ab19   flask_workwatch_v1                       "gunicorn main:app"      3 months ago   Up 3 days                       0.0.0.0:8033->8080/tcp, :::8033->8080/tcp             t0p3-workwatch_web_1
a7d251d15d88   lscr.io/linuxserver/duckdns:latest       "/init"                  4 months ago   Up 3 days                                                                             duckdns
```
<div class="text">
There are many containers here, and when run <code>sudo docker ps</code>, it might not look the exact same. Refer to the ports column and choose a port number. Take recipies_port_v1 for example, their ports are
<div class="code"><code>0.0.0.0:8011->8086/tcp, :::8011->8086/tc</code></div>
</div>

Look at the left hand number of each container and find one that is **NOT** being used by another container. **Please make sure to add your port number to this [spreadsheet](https://docs.google.com/spreadsheets/d/1lF-hdNvA_nGc580IKdckl6JI_H7SxKnBZUy_YeyK0bQ/edit?usp=sharing)** to avoid future confusion. To double-check, I advise that you look at the spreadsheet and see if your port number is being used.

# Step 2: Updating Port Number through VSCode
<div class="text2">
Open your group's flask on VSCode, and find <code>docker-compose.yml</code> and <code>Dockerfile</code>
</div>
<br>
<div class="text3">
Within <code>docker-compose.yml</code>, you should probably change the image to whatever you want. It should look like <code>flask_port_v1</code> but you must change it. Your new image name may look like <code>flask_insert-name_v1</code> or even <code>groupflask_v1</code>. Refer to the <a href="https://docs.google.com/spreadsheets/d/1lF-hdNvA_nGc580IKdckl6JI_H7SxKnBZUy_YeyK0bQ/edit?usp=sharing">spreadsheet</a> to make sure your image is different than others, and while your at it, make sure to add your image under the images column.
The next thing to consider is the actual ports section:
</div>
This is what <code>docker-compose.yml</code> should look like with the exception of the name of your image and the left hand number under ports
```bash
version: '3'
services:
        web:
                image: flask_projectone_v1
                build: .
                ports:
                        - "8011:8086" # 8011 would be your port and 8086 being the internal port
                volumes:
                        - ./volumes:/volumes
                        - ./instance:/instance
                restart: unless-stopped
```
<br>
<div class="text3">
Within <code>Dockerfile</code>, you should be able to find <code>ENV GUNICORN_CMD_ARGS="--workers=1 --bind=0.0.0.0:8086"</code> and <code>EXPOSE 8086</code>. 8086 will be the port number that is on the right, if you wish you can change this to 8080 or another number, but keeping it 8086 is recommended for simplicity
</div>
This is what <code>Dockerfile</code> should look like unless you decided to change the port number
```bash
FROM docker.io/python:3.10

WORKDIR /

# --- [Install python and pip] ---
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y python3 python3-pip git
COPY . /

RUN pip install --no-cache-dir -r requirements.txt
RUN pip install gunicorn

ENV GUNICORN_CMD_ARGS="--workers=1 --bind=0.0.0.0:8086" # Can change 8086 to another number such as 8080 if desired

EXPOSE 8086 # If changing internal port number in line above, this number must also match that

CMD [ "gunicorn", "main:app" ]
```

# Step 3: Testing Step 1 and 2
This step is just testing to see if our container is up and the steps in the past were done correctly.

1. In VSCode open up a new terminal
2. Type <code>sudo docker-compose up</code>

```bash
sudo docker-compose up

[+] Running 1/0
 ⠿ Container flask-web-1  Created                                                    0.0s
Attaching to flask-web-1 # instead of flask-web-1 it should be yours
flask-web-1  | [2023-02-20 18:55:57 +0000] [1] [INFO] Starting gunicorn 20.1.0
flask-web-1  | [2023-02-20 18:55:57 +0000] [1] [INFO] Listening at: http://0.0.0.0:8080 (1) # This port number will be your port number for the container
```
- If this does not work then seek help or try doing step 1 and 2 and making sure your ports are fine
<br>
<br>
<div class="text">Localhost</div>
In this step, if the terminal says that it has been built, go to a new browser and type <code>localhost:xxxx</code>. The numbers after localhost: should be your port number for the flask, the number on the left. 

For example if my ports are <code>8091:8086</code>, I would type <code>localhost:8091</code>
- Before Deployment on AWS, please make sure to check the [spreadsheet](https://docs.google.com/spreadsheets/d/1lF-hdNvA_nGc580IKdckl6JI_H7SxKnBZUy_YeyK0bQ/edit?usp=sharing) to see if your ports are the same as someone else's

# Step 4: Deploying onto AWS
Now we have made it to the AWS Part of Deployment, this is where we will get the site hosted on your own custom domain using Freenom or DuckDNS
<br>


<div class="text4"><strong>PLEASE MAKE SURE YOU HAVE COMMITTED YOUR CHANGES TO THE FILES IN VSCODE, AND A REMINDER TO PULL FROM GITHUB BEFORE PUSHING YOUR CHANGES</strong></div>
```bash
cd ~
sudo docker-compose
ls # should see list of other projects
```
```bash
git clone github.com/{{username}}/{{repository name}}.git
Cloning into 'Flask'...
remote: Enumerating objects: 699, done.
remote: Counting objects: 100% (699/699), done.
remote: Compressing objects: 100% (429/429), done.
remote: Total 699 (delta 330), reused 597 (delta 230), pack-reused 0
Receiving objects: 100% (699/699), 12.57 MiB | 10.64 MiB/s, done.
Resolving deltas: 100% (330/330), done.
```