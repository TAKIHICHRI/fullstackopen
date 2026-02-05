sequenceDiagram
    participant browser
    participant server

    Note over browser: التمرين 0.4: إضافة ملاحظة جديدة
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTTP 302 (إعادة توجيه إلى الصفحة الرئيسية)
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: تحميل ملف الـ HTML الجديد
    deactivate server

    Note over browser: التمرين 0.5: تطبيق الصفحة الواحدة (SPA)
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    Note over browser: التمرين 0.6: إضافة ملاحظة في الـ SPA
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP 201 (تم الإنشاء بنجاح)
    deactivate server
