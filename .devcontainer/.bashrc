# append to history after each command, not after shell exit (default)
shopt -s histappend
PROMPT_COMMAND="history -a; $PROMPT_COMMAND"

# install nix
if [ -f "/home/dev/.nix-profile/etc/profile.d/nix.sh" ]; then
  . /home/dev/.nix-profile/etc/profile.d/nix.sh
fi
