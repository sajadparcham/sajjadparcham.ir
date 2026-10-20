
import { useEffect, useState } from "react";

import {
  Mail,
  Search,
  MoreHorizontal,
  CheckCircle2,
  Clock3,
  Trash2,
} from "lucide-react";

import {
  getMessages,
  markMessageAsRead,
  deleteMessage,
} from "../../utils/messages";
/*
|--------------------------------------------------------------------------
| DEMO MESSAGES
|--------------------------------------------------------------------------
|
| فعلاً پیام‌ها به صورت آزمایشی هستند.
|
| بعداً:
|
| Contact Form
|      ↓
| Backend
|      ↓
| Database
|      ↓
| Messages
|
|--------------------------------------------------------------------------
*/



export default function Messages() {
  /*
  |--------------------------------------------------------------------------
  | MESSAGES STATE
  |--------------------------------------------------------------------------
  */

  const [messages, setMessages] = useState(initialMessages);

  /*
  |--------------------------------------------------------------------------
  | SEARCH STATE
  |--------------------------------------------------------------------------
  */

  const [search, setSearch] = useState("");

  /*
  |--------------------------------------------------------------------------
  | SEARCH FILTER
  |--------------------------------------------------------------------------
  */

  const filteredMessages = messages.filter((message) => {
    const searchValue = search.toLowerCase();

    return (
      message.name.toLowerCase().includes(searchValue) ||
      message.email.toLowerCase().includes(searchValue) ||
      message.subject.toLowerCase().includes(searchValue)
    );
  });

  /*
  |--------------------------------------------------------------------------
  | MARK AS READ
  |--------------------------------------------------------------------------
  */

  const markAsRead = (id) => {
    setMessages((previousMessages) =>
      previousMessages.map((message) =>
        message.id === id
          ? { ...message, status: "read" }
          : message
      )
    );
  };

  return (
    <div className="space-y-8">
      {/*
      ======================================================================
      HEADER
      ======================================================================
      */}

      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-emerald-400">
          MESSAGES
        </p>

        <h1 className="mt-3 text-3xl font-bold text-white">
          پیام‌ها
        </h1>

        <p className="mt-2 text-sm leading-7 text-zinc-500">
          پیام‌هایی که از فرم ارتباط با شما ارسال می‌شوند در این قسمت
          نمایش داده خواهند شد.
        </p>
      </div>

      {/*
      ======================================================================
      SEARCH
      ======================================================================
      */}

      <div className="relative max-w-md">
        <Search
          size={17}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-zinc-600
          "
        />

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="جستجوی پیام..."
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/[0.02]
            py-3
            pl-4
            pr-11
            text-sm
            text-white
            outline-none
            placeholder:text-zinc-700
            focus:border-emerald-400/30
          "
        />
      </div>

      {/*
      ======================================================================
      MESSAGE LIST
      ======================================================================
      */}

      <div className="space-y-3">
        {filteredMessages.map((message) => (
          <div
            key={message.id}
            className={`
              rounded-2xl
              border
              p-5
              transition-all
              duration-300
              ${
                message.status === "new"
                  ? "border-emerald-400/20 bg-emerald-400/[0.025]"
                  : "border-white/10 bg-white/[0.02]"
              }
            `}
          >
            <div className="flex items-start gap-4">
              {/*
              --------------------------------------------------------------
              ICON
              --------------------------------------------------------------
              */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-black/20
                  text-emerald-400
                "
              >
                <Mail size={18} />
              </div>

              {/*
              --------------------------------------------------------------
              MESSAGE CONTENT
              --------------------------------------------------------------
              */}

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-semibold text-white">
                    {message.name}
                  </h3>

                  {message.status === "new" && (
                    <span
                      className="
                        rounded-full
                        bg-emerald-400/10
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-emerald-400
                      "
                    >
                      جدید
                    </span>
                  )}
                </div>

                <p className="mt-1 text-xs text-zinc-600">
                  {message.email}
                </p>

                <p className="mt-4 text-sm font-medium text-zinc-300">
                  {message.subject}
                </p>

                <p className="mt-2 text-sm leading-7 text-zinc-500">
                  {message.message}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-zinc-700">
                  <span className="flex items-center gap-1.5">
                    <Clock3 size={13} />
                    {message.date}
                  </span>

                  {message.status === "read" && (
                    <span className="flex items-center gap-1.5 text-emerald-500/60">
                      <CheckCircle2 size={13} />
                      خوانده شده
                    </span>
                  )}
                </div>
              </div>

              {/*
              --------------------------------------------------------------
              ACTIONS
              --------------------------------------------------------------
              */}

              <div className="flex shrink-0 items-center gap-2">
                {message.status === "new" && (
                  <button
                    onClick={() => markAsRead(message.id)}
                    className="
                      hidden
                      rounded-lg
                      border
                      border-white/10
                      px-3
                      py-2
                      text-xs
                      text-zinc-500
                      transition-colors
                      hover:border-emerald-400/20
                      hover:text-emerald-400
                      sm:block
                    "
                  >
                    خوانده شد
                  </button>
                )}

                <button
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    text-zinc-600
                    transition-colors
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredMessages.length === 0 && (
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-10
              text-center
            "
          >
            <p className="text-sm text-zinc-600">
              پیامی پیدا نشد.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}