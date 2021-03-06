FROM gitpod/workspace-full

RUN bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmybash/oh-my-bash/master/tools/install.sh)"

RUN sudo apt-get update &&\
    sudo apt-get install -y \
        fonts-firacode &&\
    cd /tmp &&\
    wget https://download.jetbrains.com/fonts/JetBrainsMono-2.225.zip &&\
    unzip JetBrainsMono-2.225.zip &&\
    sudo cp -Rf fonts/* /usr/share/fonts &&\
    fc-cache -f -v

RUN sudo apt-get install -y graphviz &&\
    sudo rm -rf /var/lib/apt/lists/*

USER gitpod