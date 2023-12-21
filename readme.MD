don't use hugginface if you don't wanna cry

# BUNDLER PROXY
This is a simple proxy, this have 2 providers huggingface, fireworks and voyage

# REQUIREMENTS
you need for run this proxy:
- Nodejs (I used nodejs 20 for this project)
- git 

you can install [nodejs](https://nodejs.org/en) and [git](https://git-scm.com/) in their pages

# HOW TO INSTALL THE PROXY
for install this you need execute this command
git clone https://github.com/Juanperias/bundler-proxy.git

# HOW TO CONFIGURE THE PROXY
to configure this proxy you need change the content of .env,

if you wanna use huggingface change the provider to huggingface

else if you wanna use fireworks change the provider to fireworks

else if you wanna use cloudflare workers change the provider to workers

else if you wanna use llama-api change the provider to llama

if you're using hugginface create a access token [hugginface page](https://huggingface.co/settings/tokens)

else if you're using fireworks, obtain an api key in 
[fireworks page](https://app.fireworks.ai/)

else if you're using llama api obtain an api key in
[llama api page](https://www.llama-api.com/)



# SELECTING A MODEL A RUN THE PROXY

- [HUGGINFACE MODELS](https://huggingface.co/models)
- [FIREWORKS MODELS](https://app.fireworks.ai/models)

In hugginface you need to search for api interference and text-generation.

In fireworks you need to search for text

# HOW TO RUN THE PROXY
in windows you need to run start.bat
in linux and macos you need to run start.sh

## And enjoy the proxy