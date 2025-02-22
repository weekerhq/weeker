# append to history after each command, not after shell exit (default)
shopt -s histappend
PROMPT_COMMAND="history -a; $PROMPT_COMMAND"
