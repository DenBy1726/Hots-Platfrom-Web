export default function exceptionHandler(error) {
    return Promise.reject(error).then((success) => {
        },
        (error) => {
            if (error.response) {
                switch (error.response.status) {
                    case 403:
                        window.location=`#/403`;
                        break;
                }
            }

            throw error;
        });
}