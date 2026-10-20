/*
|--------------------------------------------------------------------------
| MESSAGES STORAGE
|--------------------------------------------------------------------------
|
| این فایل مسئول ذخیره و دریافت پیام‌های Contact است.
|
| فعلاً از localStorage مرورگر استفاده می‌کنیم.
|
| مسیر فعلی:
|
| Contact
|    ↓
| saveMessage()
|    ↓
| localStorage
|    ↓
| Admin
|    ↓
| getMessages()
|
| بعداً:
|
| Contact
|    ↓
| API
|    ↓
| Backend
|    ↓
| Database
|
| بنابراین Contact و Admin را مستقیم به هم وابسته نمی‌کنیم.
|
|--------------------------------------------------------------------------
*/

const STORAGE_KEY = "portfolio_messages";


/*
|--------------------------------------------------------------------------
| دریافت پیام‌ها
|--------------------------------------------------------------------------
*/

export function getMessages() {
  try {
    const savedMessages = localStorage.getItem(STORAGE_KEY);

    if (!savedMessages) {
      return [];
    }

    return JSON.parse(savedMessages);

  } catch (error) {
    console.error("خطا در دریافت پیام‌ها:", error);

    return [];
  }
}


/*
|--------------------------------------------------------------------------
| ذخیره پیام جدید
|--------------------------------------------------------------------------
*/

export function saveMessage(message) {

  const currentMessages = getMessages();

  const newMessage = {
    id: Date.now(),

    name: message.name,

    email: message.email,

    subject: message.subject,

    message: message.message,

    date: new Date().toLocaleString("fa-IR"),

    status: "new",
  };


  const updatedMessages = [
    newMessage,
    ...currentMessages,
  ];


  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedMessages)
  );


  return newMessage;
}


/*
|--------------------------------------------------------------------------
| علامت‌گذاری پیام به عنوان خوانده شده
|--------------------------------------------------------------------------
*/

export function markMessageAsRead(id) {

  const messages = getMessages();


  const updatedMessages = messages.map((message) => {

    if (message.id === id) {

      return {
        ...message,
        status: "read",
      };

    }

    return message;

  });


  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedMessages)
  );


  return updatedMessages;
}


/*
|--------------------------------------------------------------------------
| حذف پیام
|--------------------------------------------------------------------------
*/

export function deleteMessage(id) {

  const messages = getMessages();


  const updatedMessages = messages.filter(
    (message) => message.id !== id
  );


  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedMessages)
  );


  return updatedMessages;
}