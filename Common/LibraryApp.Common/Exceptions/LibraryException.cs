using System;

namespace LibraryApp.Common.Exceptions
{
    public class LibraryObjectNullException : Exception
    {
        public LibraryObjectNullException(string message) : base(message) { }

        public LibraryObjectNullException(string message, Exception inner) : base(message, inner) { }
    }

    public class LibraryObjectNotFoundException : Exception
    {
        public LibraryObjectNotFoundException(string message) : base(message) { }

        public LibraryObjectNotFoundException(string message, Exception inner) : base(message, inner) { }
    }

    public class LibraryOutOfRangeException : Exception
    {
        public LibraryOutOfRangeException(string message) : base(message) { }

        public LibraryOutOfRangeException(string message, Exception inner) : base(message, inner) { }
    }

    public class LibraryGeneralException : Exception
    {
        public LibraryGeneralException(string message) : base(message) { }

        public LibraryGeneralException(string message, Exception inner) : base(message, inner) { }
    }
}