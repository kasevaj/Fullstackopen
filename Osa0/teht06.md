# Fullstackopen

*Tehtävä 0.6*

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    activate server
    server-->>browser: [ {"message":"note created"} ]

    deactivate server

    Browser executes the callback function 
        sendToServer
        form.onSubmit