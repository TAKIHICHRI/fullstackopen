sequenceDiagram
    participant browser
    participant server
    
    Note over browser: Exercise 0.4: New note diagram
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTTP 302 (Redirect to /notes)
    deactivate server

    Note over browser: Exercise 0.5: Single page app diagram
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    Note over browser: Exercise 0.6: New note in SPA
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP 201 (Created)
    deactivate server
