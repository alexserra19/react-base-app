import AppConstants from "../utils/AppConstants";

const interceptor = {
    async doRequest(url: string, body = null, method = 'GET', contentType = 'application/json', formData = false) {
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': contentType,
                },
                body: body ? (formData ? body : JSON.stringify(body)) : null
            });

            const responseJson = this.responseConvertToJson(response)
            return responseJson;

        } catch (error) {
            this.handleNetworkError()
        }
    },

    handleNetworkError() {
        alert(
            "Ha habido un error, por favor vuelva a intentarlo",
        )
    },

    responseConvertToJson(response: any) {
        return (
            {
                isSuccess: (response.status >= 200 && response.status <= 299),
                ...response
            }
        )
    }
}

export default interceptor;