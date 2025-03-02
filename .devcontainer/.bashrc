# append to history after each command, not after shell exit (default)
shopt -s histappend
PROMPT_COMMAND="history -a; $PROMPT_COMMAND"

# install nix
if [ -f "/home/dev/.nix-profile/etc/profile.d/nix.sh" ]; then
  . /home/dev/.nix-profile/etc/profile.d/nix.sh
fi

export SYSTEM_ARCH=$(uname -m | sed -e 's/x86_64/amd64/' -e 's/aarch64/arm64/')
export SYSTEM_NUMBER_OF_CORES=$(lscpu -b -p=Core,Socket | grep -v '^#' | sort -u | wc -l)
