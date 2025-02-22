FROM debian:12.9-slim

# use bash inside running container
ENV SHELL=/bin/bash
# use bash while building container
SHELL ["/bin/bash", "-c"]

# create non-root user
ENV NON_ROOT_USER=dev
# default user and group id - user’s UID/GID will be updated to match
# the local user’s UID/GID to avoid permission problems (updateRemoteUserUID)
# https://containers.dev/implementors/json_reference/
ARG DEFAULT_USER_UID=1000
ARG DEFAULT_USER_GID=1000
RUN groupadd --gid ${DEFAULT_USER_GID} ${NON_ROOT_USER} && \
    useradd ${NON_ROOT_USER} --uid ${DEFAULT_USER_UID} --gid ${DEFAULT_USER_GID} --create-home

# update package sources
RUN apt-get update && \
    apt-get upgrade -y

# install common tools
RUN apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    git \
    bats

# node
# renovate: source=github-tags name=nodejs/node versioning=semver
ENV NODE_VERSION=23.7.0
RUN curl -sL https://deb.nodesource.com/setup_23.x | bash -
RUN apt-get install -y --no-install-recommends \
    nodejs=${NODE_VERSION}*

# cleanup
RUN apt-get autoremove -y && \
    apt-get clean -y && \
    cd /tmp && rm -rf *
