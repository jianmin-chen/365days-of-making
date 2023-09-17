function with_backoff {
    local max_attempts=${ATTEMPTS-5}
    local timeout=${TIMEOUT-1}
    local attempt=1
    local exitCode=0

    while (($attempt < $max_attempts))
    do
        if "$@"
        then
            return 0
        else
            exitCode=$?
        fi

        sleep $timeout
        attempt=$((attempt + 1))
        timeout=$((timeout * 2))
    done
}

cargo install stork-search --locked
mv ./search.ts ./src/pages/api
npm run dev&
RUNNING_PID=$!
with_backoff curl http://localhost:3000/api/search
kill ${RUNNING_PID}
stork build --input ./public/search.toml --output ./public/search.st
mv ./src/pages/api/search.ts .