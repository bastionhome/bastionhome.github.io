# This script is designed to take input via a pipe or file redirection, e.g.
# `pbpaste | tools/domains.sh` or `<history.txt tools/domains.sh`

sed -e 's|https\?://||' | sed -e 's|/.\+||' | sort | uniq