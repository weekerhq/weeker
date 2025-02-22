FROM debian:12.9-slim

# use bash inside running container
ENV SHELL=/bin/bash
# use bash while building container
SHELL ["/bin/bash", "-c"]

# create non-root user
ENV NON_ROOT_USER=dev
ENV NON_ROOT_USER_HOME=/home/${NON_ROOT_USER}
# default user and group id - user’s UID/GID will be updated to match
# the local user’s UID/GID to avoid permission problems (updateRemoteUserUID)
# https://containers.dev/implementors/json_reference/
ARG NON_ROOT_USER_UID=1000
ARG NON_ROOT_USER_GID=1000
RUN groupadd --gid ${NON_ROOT_USER_GID} ${NON_ROOT_USER} && \
    useradd ${NON_ROOT_USER} --uid ${NON_ROOT_USER_UID} --gid ${NON_ROOT_USER_GID} --create-home

# update package sources
RUN apt-get update && \
    apt-get upgrade -y

# install common tools
RUN apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    xz-utils

# cleanup
RUN apt-get autoremove -y && \
    apt-get clean -y && \
    cd /tmp && rm -rf *

# patch ~/.bashrc
COPY .bashrc /usr/lib/devcontainer/.bashrc
RUN cat /usr/lib/devcontainer/.bashrc >> ${NON_ROOT_USER_HOME}/.bashrc

# install nix
RUN mkdir /nix && \
    chown ${NON_ROOT_USER} /nix

USER dev
ENV HOME=${NON_ROOT_USER_HOME}
RUN curl -sL https://nixos.org/nix/install | sh -s -- --no-daemon
ENV PATH="${HOME}/.nix-profile/bin:${PATH}"

COPY flake.nix flake.lock ${HOME}/
RUN nix --extra-experimental-features "nix-command flakes" profile install ${HOME}
