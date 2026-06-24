using System.Diagnostics;
using System.Globalization;

namespace System
{
    /// <summary>
    /// Represents a date without a time component, designed to support the Dataverse DateOnly field behavior.
    /// This struct wraps <see cref="DateTime"/> and strips any time information,
    /// providing a date-only type for .NET Framework where <c>System.DateOnly</c> is not available.
    /// </summary>
    [DebuggerNonUserCode()]
    internal readonly struct Date : IComparable, IFormattable, IComparable<Date>, IEquatable<Date>
    {
        private readonly DateTime _dt;

        /// <summary>Represents the largest possible value of <see cref="Date"/>.</summary>
        public static readonly Date MaxValue = new Date(DateTime.MaxValue);

        /// <summary>Represents the smallest possible value of <see cref="Date"/>.</summary>
        public static readonly Date MinValue = new Date(DateTime.MinValue);

        /// <summary>
        /// Initializes a new instance of the <see cref="Date"/> struct to the specified year, month, and day.
        /// </summary>
        /// <param name="year">The year (1 through 9999).</param>
        /// <param name="month">The month (1 through 12).</param>
        /// <param name="day">The day (1 through the number of days in <paramref name="month"/>).</param>
        public Date(int year, int month, int day)
        {
            _dt = new DateTime(year, month, day);
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Date"/> struct from a <see cref="DateTime"/>,
        /// stripping the time component.
        /// </summary>
        /// <param name="dateTime">The <see cref="DateTime"/> whose date component is used.</param>
        public Date(DateTime dateTime)
        {
            _dt = dateTime.Date;
        }

        /// <summary>Returns a <see cref="TimeSpan"/> representing the difference between two dates.</summary>
        public static TimeSpan operator -(Date d1, Date d2) => d1._dt - d2._dt;

        /// <summary>Returns a new <see cref="Date"/> by subtracting a <see cref="TimeSpan"/>.</summary>
        public static Date operator -(Date d, TimeSpan t) => new Date(d._dt - t);

        /// <summary>Determines whether two <see cref="Date"/> values are not equal.</summary>
        public static bool operator !=(Date d1, Date d2) => d1._dt != d2._dt;

        /// <summary>Returns a new <see cref="Date"/> by adding a <see cref="TimeSpan"/>.</summary>
        public static Date operator +(Date d, TimeSpan t) => new Date(d._dt + t);

        /// <summary>Determines whether one <see cref="Date"/> is earlier than another.</summary>
        public static bool operator <(Date d1, Date d2) => d1._dt < d2._dt;

        /// <summary>Determines whether one <see cref="Date"/> is earlier than or equal to another.</summary>
        public static bool operator <=(Date d1, Date d2) => d1._dt <= d2._dt;

        /// <summary>Determines whether two <see cref="Date"/> values are equal.</summary>
        public static bool operator ==(Date d1, Date d2) => d1._dt == d2._dt;

        /// <summary>Determines whether one <see cref="Date"/> is later than another.</summary>
        public static bool operator >(Date d1, Date d2) => d1._dt > d2._dt;

        /// <summary>Determines whether one <see cref="Date"/> is later than or equal to another.</summary>
        public static bool operator >=(Date d1, Date d2) => d1._dt >= d2._dt;

        /// <summary>Implicitly converts a <see cref="Date"/> to a <see cref="DateTime"/> (time is midnight).</summary>
        public static implicit operator DateTime(Date d) => d._dt;

        /// <summary>Explicitly converts a <see cref="DateTime"/> to a <see cref="Date"/>, stripping the time component.</summary>
        public static explicit operator Date(DateTime d) => new Date(d);

        /// <summary>Gets the day of the month (1 through 31).</summary>
        public int Day => _dt.Day;

        /// <summary>Gets the number of days since January 1, 0001 in the Proleptic Gregorian calendar.</summary>
        public int DayNumber => (int)(_dt.Ticks / TimeSpan.TicksPerDay);

        /// <summary>Gets the day of the week.</summary>
        public DayOfWeek DayOfWeek => _dt.DayOfWeek;

        /// <summary>Gets the day of the year (1 through 366).</summary>
        public int DayOfYear => _dt.DayOfYear;

        /// <summary>Gets the month component (1 through 12).</summary>
        public int Month => _dt.Month;

        /// <summary>Gets today's date.</summary>
        public static Date Today => new Date(DateTime.Today);

        /// <summary>Gets the year component.</summary>
        public int Year => _dt.Year;

        /// <summary>
        /// Creates a <see cref="Date"/> from a <see cref="DateTime"/>, stripping the time component.
        /// Mirrors <c>System.DateOnly.FromDateTime</c>.
        /// </summary>
        public static Date FromDateTime(DateTime dateTime) => new Date(dateTime);

        /// <summary>
        /// Creates a <see cref="Date"/> from the specified day number (days since January 1, 0001).
        /// Mirrors <c>System.DateOnly.FromDayNumber</c>.
        /// </summary>
        /// <param name="dayNumber">The number of days since January 1, 0001 (0 = 0001-01-01).</param>
        public static Date FromDayNumber(int dayNumber) => new Date(new DateTime((long)dayNumber * TimeSpan.TicksPerDay));

        /// <summary>Returns a new <see cref="Date"/> that adds the specified number of days.</summary>
        public Date AddDays(int value) => new Date(_dt.AddDays(value));

        /// <summary>Returns a new <see cref="Date"/> that adds the specified number of months.</summary>
        public Date AddMonths(int value) => new Date(_dt.AddMonths(value));

        /// <summary>Returns a new <see cref="Date"/> that adds the specified number of years.</summary>
        public Date AddYears(int value) => new Date(_dt.AddYears(value));

        /// <summary>Compares two <see cref="Date"/> values and returns an integer that indicates their relative order.</summary>
        public static int Compare(Date d1, Date d2) => d1.CompareTo(d2);

        /// <summary>Compares this instance to a specified <see cref="Date"/> and returns their relative order.</summary>
        public int CompareTo(Date value) => _dt.CompareTo(value._dt);

        /// <summary>
        /// Compares this instance to a specified object and returns their relative order.
        /// </summary>
        /// <param name="value">An object to compare, or <c>null</c>.</param>
        /// <returns>A signed number indicating the relative order.</returns>
        /// <exception cref="ArgumentException"><paramref name="value"/> is not a <see cref="Date"/>.</exception>
        public int CompareTo(object value)
        {
            if (value == null) return 1;
            if (value is Date other) return CompareTo(other);
            throw new ArgumentException("Object must be of type Date.");
        }

        /// <summary>Returns the number of days in the specified month and year.</summary>
        public static int DaysInMonth(int year, int month) => DateTime.DaysInMonth(year, month);

        /// <summary>Indicates whether this instance is equal to a specified <see cref="Date"/>.</summary>
        public bool Equals(Date value) => _dt.Equals(value._dt);

        /// <summary>Indicates whether this instance is equal to a specified object.</summary>
        public override bool Equals(object value) => value is Date other && _dt.Equals(other._dt);

        /// <summary>Returns the hash code for this instance.</summary>
        public override int GetHashCode() => _dt.GetHashCode();

        /// <summary>Indicates whether two <see cref="Date"/> values are equal.</summary>
        public static bool Equals(Date d1, Date d2) => d1._dt.Equals(d2._dt);

        /// <summary>Returns whether the specified year is a leap year.</summary>
        public static bool IsLeapYear(int year) => DateTime.IsLeapYear(year);

        /// <summary>Converts the string representation of a date to its <see cref="Date"/> equivalent.</summary>
        public static Date Parse(string s) => new Date(DateTime.Parse(s));

        /// <summary>Converts the string representation of a date using a specified format provider.</summary>
        public static Date Parse(string s, IFormatProvider provider) => new Date(DateTime.Parse(s, provider));

        /// <summary>Converts the string representation of a date using a specified format provider and style.</summary>
        public static Date Parse(string s, IFormatProvider provider, DateTimeStyles style) => new Date(DateTime.Parse(s, provider, style));

        /// <summary>Converts the string representation of a date using a specified format and format provider.</summary>
        public static Date ParseExact(string s, string format, IFormatProvider provider) => new Date(DateTime.ParseExact(s, format, provider));

        /// <summary>Converts the string representation of a date using a specified format, format provider, and style.</summary>
        public static Date ParseExact(string s, string format, IFormatProvider provider, DateTimeStyles style) => new Date(DateTime.ParseExact(s, format, provider, style));

        /// <summary>Converts the string representation of a date using specified formats, format provider, and style.</summary>
        public static Date ParseExact(string s, string[] formats, IFormatProvider provider, DateTimeStyles style) => new Date(DateTime.ParseExact(s, formats, provider, style));

        /// <summary>Returns a <see cref="TimeSpan"/> representing the difference between this date and the specified date.</summary>
        public TimeSpan Subtract(Date value) => this - value;

        /// <summary>Returns a new <see cref="Date"/> by subtracting a <see cref="TimeSpan"/>.</summary>
        public Date Subtract(TimeSpan value) => this - value;

        /// <summary>Deconstructs this <see cref="Date"/> into year, month, and day components.</summary>
        public void Deconstruct(out int year, out int month, out int day)
        {
            year = Year;
            month = Month;
            day = Day;
        }

        /// <summary>
        /// Returns a <see cref="DateTime"/> set to this date with the specified time components.
        /// Since .NET Framework does not have <c>TimeOnly</c>, this provides equivalent functionality
        /// to <c>System.DateOnly.ToDateTime(TimeOnly)</c>.
        /// </summary>
        public DateTime ToDateTime(int hour, int minute, int second) => new DateTime(Year, Month, Day, hour, minute, second);

        /// <summary>
        /// Returns a <see cref="DateTime"/> set to this date with the specified time components and <see cref="DateTimeKind"/>.
        /// Equivalent to <c>System.DateOnly.ToDateTime(TimeOnly, DateTimeKind)</c>.
        /// </summary>
        public DateTime ToDateTime(int hour, int minute, int second, DateTimeKind kind) => new DateTime(Year, Month, Day, hour, minute, second, kind);

        /// <summary>Returns the long date string representation.</summary>
        public string ToLongString() => _dt.ToLongDateString();

        /// <summary>Returns the short date string representation.</summary>
        public string ToShortString() => _dt.ToShortDateString();

        /// <summary>Returns the short date string representation of this <see cref="Date"/>.</summary>
        public override string ToString() => ToShortString();

        /// <summary>Formats this <see cref="Date"/> using the specified format provider.</summary>
        public string ToString(IFormatProvider provider) => _dt.ToString(provider);

        /// <summary>
        /// Formats this <see cref="Date"/> using the specified format string.
        /// The round-trip ("O"/"o") and sortable ("s") format specifiers return ISO 8601 date format (yyyy-MM-dd).
        /// </summary>
        public string ToString(string format)
        {
            if (format == "O" || format == "o" || format == "s")
                return ToString("yyyy-MM-dd");
            return _dt.ToString(format);
        }

        /// <summary>Formats this <see cref="Date"/> using the specified format string and format provider.</summary>
        public string ToString(string format, IFormatProvider provider) => _dt.ToString(format, provider);

        /// <summary>Tries to convert the string representation of a date to its <see cref="Date"/> equivalent.</summary>
        public static bool TryParse(string s, out Date result)
        {
            bool success = DateTime.TryParse(s, out DateTime d);
            result = new Date(d);
            return success;
        }

        /// <summary>Tries to convert the string representation of a date using a specified format provider and style.</summary>
        public static bool TryParse(string s, IFormatProvider provider, DateTimeStyles style, out Date result)
        {
            bool success = DateTime.TryParse(s, provider, style, out DateTime d);
            result = new Date(d);
            return success;
        }

        /// <summary>Tries to convert the string representation of a date using a specified format, format provider, and style.</summary>
        public static bool TryParseExact(string s, string format, IFormatProvider provider, DateTimeStyles style, out Date result)
        {
            bool success = DateTime.TryParseExact(s, format, provider, style, out DateTime d);
            result = new Date(d);
            return success;
        }

        /// <summary>Tries to convert the string representation of a date using specified formats, format provider, and style.</summary>
        public static bool TryParseExact(string s, string[] formats, IFormatProvider provider, DateTimeStyles style, out Date result)
        {
            bool success = DateTime.TryParseExact(s, formats, provider, style, out DateTime d);
            result = new Date(d);
            return success;
        }
    }

    /// <summary>
    /// Extension methods for converting between <see cref="DateTime"/> and <see cref="Date"/>.
    /// </summary>
    [DebuggerNonUserCode()]
    internal static class DateTimeExtensions
    {
        /// <summary>Converts a <see cref="DateTime"/> to a <see cref="Date"/>, stripping the time component.</summary>
        public static Date ToDate(this DateTime dt) => new Date(dt);

        /// <summary>Converts a <see cref="Date"/> to a <see cref="DateTime"/> with time set to midnight.</summary>
        public static DateTime ToDateTime(this Date d) => new DateTime(d.Year, d.Month, d.Day, 0, 0, 0);
    }
}
