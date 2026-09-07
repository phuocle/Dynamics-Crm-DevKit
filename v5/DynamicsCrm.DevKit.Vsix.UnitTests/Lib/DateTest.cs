using System;
using System.Globalization;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.UnitTests.Lib
{
    [TestClass]
    public class DateTest
    {
        #region Constructors

        [TestMethod]
        public void Constructor_YearMonthDay_SetsCorrectValues()
        {
            var date = new Date(2025, 3, 15);

            Assert.AreEqual(2025, date.Year);
            Assert.AreEqual(3, date.Month);
            Assert.AreEqual(15, date.Day);
        }

        [TestMethod]
        public void Constructor_DateTime_StripsTimeComponent()
        {
            var dateTime = new DateTime(2025, 6, 20, 14, 30, 45, 123);
            var date = new Date(dateTime);

            Assert.AreEqual(2025, date.Year);
            Assert.AreEqual(6, date.Month);
            Assert.AreEqual(20, date.Day);
            DateTime converted = date;
            Assert.AreEqual(0, converted.Hour);
            Assert.AreEqual(0, converted.Minute);
            Assert.AreEqual(0, converted.Second);
            Assert.AreEqual(0, converted.Millisecond);
        }

        [TestMethod]
        public void Constructor_DateTime_MidnightRemainsUnchanged()
        {
            var dateTime = new DateTime(2025, 1, 1, 0, 0, 0);
            var date = new Date(dateTime);

            Assert.AreEqual(new DateTime(2025, 1, 1), (DateTime)date);
        }

        #endregion

        #region Static Fields

        [TestMethod]
        public void MaxValue_EqualsDateTimeMaxValueDate()
        {
            DateTime maxDt = Date.MaxValue;
            Assert.AreEqual(DateTime.MaxValue.Date, maxDt);
        }

        [TestMethod]
        public void MinValue_EqualsDateTimeMinValueDate()
        {
            DateTime minDt = Date.MinValue;
            Assert.AreEqual(DateTime.MinValue.Date, minDt);
        }

        [TestMethod]
        public void DefaultDate_EqualsMinValue()
        {
            var defaultDate = default(Date);
            Assert.AreEqual(Date.MinValue, defaultDate);
        }

        #endregion

        #region Operators - Arithmetic

        [TestMethod]
        public void Operator_SubtractDates_ReturnsTimeSpan()
        {
            var d1 = new Date(2025, 3, 20);
            var d2 = new Date(2025, 3, 15);

            TimeSpan result = d1 - d2;

            Assert.AreEqual(TimeSpan.FromDays(5), result);
        }

        [TestMethod]
        public void Operator_SubtractTimeSpan_ReturnsNewDate()
        {
            var date = new Date(2025, 3, 20);
            var span = TimeSpan.FromDays(5);

            Date result = date - span;

            Assert.AreEqual(new Date(2025, 3, 15), result);
        }

        [TestMethod]
        public void Operator_AddTimeSpan_ReturnsNewDate()
        {
            var date = new Date(2025, 3, 15);
            var span = TimeSpan.FromDays(10);

            Date result = date + span;

            Assert.AreEqual(new Date(2025, 3, 25), result);
        }

        #endregion

        #region Operators - Comparison

        [TestMethod]
        public void Operator_Equal_TrueForSameDate()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 10);
            Assert.IsTrue(d1 == d2);
        }

        [TestMethod]
        public void Operator_Equal_FalseForDifferentDate()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 11);
            Assert.IsFalse(d1 == d2);
        }

        [TestMethod]
        public void Operator_NotEqual_TrueForDifferentDate()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 11);
            Assert.IsTrue(d1 != d2);
        }

        [TestMethod]
        public void Operator_NotEqual_FalseForSameDate()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 10);
            Assert.IsFalse(d1 != d2);
        }

        [TestMethod]
        public void Operator_LessThan_TrueWhenEarlier()
        {
            var d1 = new Date(2025, 1, 1);
            var d2 = new Date(2025, 12, 31);
            Assert.IsTrue(d1 < d2);
        }

        [TestMethod]
        public void Operator_LessThan_FalseWhenLaterOrEqual()
        {
            var d1 = new Date(2025, 12, 31);
            var d2 = new Date(2025, 1, 1);
            Assert.IsFalse(d1 < d2);

            var d3 = new Date(2025, 6, 15);
            var d4 = new Date(2025, 6, 15);
            Assert.IsFalse(d3 < d4);
        }

        [TestMethod]
        public void Operator_LessThanOrEqual_TrueWhenEarlierOrEqual()
        {
            var d1 = new Date(2025, 1, 1);
            var d2 = new Date(2025, 12, 31);
            Assert.IsTrue(d1 <= d2);

            var d3 = new Date(2025, 6, 15);
            var d4 = new Date(2025, 6, 15);
            Assert.IsTrue(d3 <= d4);
        }

        [TestMethod]
        public void Operator_LessThanOrEqual_FalseWhenLater()
        {
            var d1 = new Date(2025, 12, 31);
            var d2 = new Date(2025, 1, 1);
            Assert.IsFalse(d1 <= d2);
        }

        [TestMethod]
        public void Operator_GreaterThan_TrueWhenLater()
        {
            var d1 = new Date(2025, 12, 31);
            var d2 = new Date(2025, 1, 1);
            Assert.IsTrue(d1 > d2);
        }

        [TestMethod]
        public void Operator_GreaterThan_FalseWhenEarlierOrEqual()
        {
            var d1 = new Date(2025, 1, 1);
            var d2 = new Date(2025, 12, 31);
            Assert.IsFalse(d1 > d2);

            var d3 = new Date(2025, 6, 15);
            var d4 = new Date(2025, 6, 15);
            Assert.IsFalse(d3 > d4);
        }

        [TestMethod]
        public void Operator_GreaterThanOrEqual_TrueWhenLaterOrEqual()
        {
            var d1 = new Date(2025, 12, 31);
            var d2 = new Date(2025, 1, 1);
            Assert.IsTrue(d1 >= d2);

            var d3 = new Date(2025, 6, 15);
            var d4 = new Date(2025, 6, 15);
            Assert.IsTrue(d3 >= d4);
        }

        [TestMethod]
        public void Operator_GreaterThanOrEqual_FalseWhenEarlier()
        {
            var d1 = new Date(2025, 1, 1);
            var d2 = new Date(2025, 12, 31);
            Assert.IsFalse(d1 >= d2);
        }

        #endregion

        #region Operators - Conversion

        [TestMethod]
        public void ImplicitConversion_DateToDateTime()
        {
            var date = new Date(2025, 7, 4);
            DateTime dt = date;
            Assert.AreEqual(new DateTime(2025, 7, 4), dt);
        }

        [TestMethod]
        public void ExplicitConversion_DateTimeToDate()
        {
            var dateTime = new DateTime(2025, 7, 4, 15, 30, 0);
            Date date = (Date)dateTime;
            Assert.AreEqual(2025, date.Year);
            Assert.AreEqual(7, date.Month);
            Assert.AreEqual(4, date.Day);
        }

        #endregion

        #region Properties

        [TestMethod]
        public void Day_ReturnsCorrectDay()
        {
            var date = new Date(2025, 8, 23);
            Assert.AreEqual(23, date.Day);
        }

        [TestMethod]
        public void DayOfWeek_ReturnsCorrectDayOfWeek()
        {
            var date = new Date(2025, 3, 1);
            Assert.AreEqual(System.DayOfWeek.Saturday, date.DayOfWeek);
        }

        [TestMethod]
        public void DayOfYear_ReturnsCorrectDayOfYear()
        {
            var date = new Date(2025, 2, 1);
            Assert.AreEqual(32, date.DayOfYear);
        }

        [TestMethod]
        public void Month_ReturnsCorrectMonth()
        {
            var date = new Date(2025, 11, 1);
            Assert.AreEqual(11, date.Month);
        }

        [TestMethod]
        public void Year_ReturnsCorrectYear()
        {
            var date = new Date(2025, 1, 1);
            Assert.AreEqual(2025, date.Year);
        }

        [TestMethod]
        public void Today_ReturnsCurrentDate()
        {
            var today = Date.Today;
            var expected = DateTime.Today;
            Assert.AreEqual(expected.Year, today.Year);
            Assert.AreEqual(expected.Month, today.Month);
            Assert.AreEqual(expected.Day, today.Day);
        }

        #endregion

        #region Add Methods

        [TestMethod]
        public void AddDays_ReturnsCorrectDate()
        {
            var date = new Date(2025, 1, 28);
            var result = date.AddDays(5);
            Assert.AreEqual(new Date(2025, 2, 2), result);
        }

        [TestMethod]
        public void AddDays_NegativeValue_SubtractsDays()
        {
            var date = new Date(2025, 3, 1);
            var result = date.AddDays(-1);
            Assert.AreEqual(new Date(2025, 2, 28), result);
        }

        [TestMethod]
        public void AddMonths_ReturnsCorrectDate()
        {
            var date = new Date(2025, 1, 31);
            var result = date.AddMonths(1);
            Assert.AreEqual(new Date(2025, 2, 28), result);
        }

        [TestMethod]
        public void AddYears_ReturnsCorrectDate()
        {
            var date = new Date(2024, 2, 29);
            var result = date.AddYears(1);
            Assert.AreEqual(new Date(2025, 2, 28), result);
        }

        #endregion

        #region Compare / CompareTo

        [TestMethod]
        public void Compare_ReturnsNegativeWhenFirstIsEarlier()
        {
            var d1 = new Date(2025, 1, 1);
            var d2 = new Date(2025, 12, 31);
            Assert.IsTrue(Date.Compare(d1, d2) < 0);
        }

        [TestMethod]
        public void Compare_ReturnsZeroWhenEqual()
        {
            var d1 = new Date(2025, 6, 15);
            var d2 = new Date(2025, 6, 15);
            Assert.AreEqual(0, Date.Compare(d1, d2));
        }

        [TestMethod]
        public void Compare_ReturnsPositiveWhenFirstIsLater()
        {
            var d1 = new Date(2025, 12, 31);
            var d2 = new Date(2025, 1, 1);
            Assert.IsTrue(Date.Compare(d1, d2) > 0);
        }

        [TestMethod]
        public void CompareTo_Date_ReturnsCorrectOrder()
        {
            var d1 = new Date(2025, 3, 1);
            var d2 = new Date(2025, 3, 2);
            Assert.IsTrue(d1.CompareTo(d2) < 0);
            Assert.AreEqual(0, d1.CompareTo(d1));
            Assert.IsTrue(d2.CompareTo(d1) > 0);
        }

        [TestMethod]
        public void CompareTo_Object_WithNull_ReturnsPositive()
        {
            var date = new Date(2025, 1, 1);
            Assert.IsTrue(date.CompareTo((object)null) > 0);
        }

        [TestMethod]
        public void CompareTo_Object_WithDate_ReturnsCorrectOrder()
        {
            var d1 = new Date(2025, 1, 1);
            object d2 = new Date(2025, 6, 15);
            Assert.IsTrue(d1.CompareTo(d2) < 0);
        }

        [TestMethod]
        public void CompareTo_Object_WithInvalidType_ThrowsArgumentException()
        {
            var date = new Date(2025, 1, 1);
            Assert.ThrowsExactly<ArgumentException>(() => date.CompareTo("not a date"));
        }

        [TestMethod]
        public void CompareTo_Object_WithBoxedDate_ReturnsZero()
        {
            var d1 = new Date(2025, 5, 10);
            object d2 = new Date(2025, 5, 10);
            Assert.AreEqual(0, d1.CompareTo(d2));
        }

        #endregion

        #region DaysInMonth / IsLeapYear

        [TestMethod]
        public void DaysInMonth_ReturnsCorrectDays()
        {
            Assert.AreEqual(31, Date.DaysInMonth(2025, 1));
            Assert.AreEqual(28, Date.DaysInMonth(2025, 2));
            Assert.AreEqual(29, Date.DaysInMonth(2024, 2));
            Assert.AreEqual(30, Date.DaysInMonth(2025, 4));
        }

        [TestMethod]
        public void IsLeapYear_ReturnsCorrectResult()
        {
            Assert.IsTrue(Date.IsLeapYear(2024));
            Assert.IsFalse(Date.IsLeapYear(2025));
            Assert.IsTrue(Date.IsLeapYear(2000));
            Assert.IsFalse(Date.IsLeapYear(1900));
        }

        #endregion

        #region Equals / GetHashCode

        [TestMethod]
        public void Equals_Date_TrueForSameDate()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 10);
            Assert.IsTrue(d1.Equals(d2));
        }

        [TestMethod]
        public void Equals_Date_FalseForDifferentDate()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 11);
            Assert.IsFalse(d1.Equals(d2));
        }

        [TestMethod]
        public void Equals_Object_TrueForBoxedDate()
        {
            var d1 = new Date(2025, 5, 10);
            object d2 = new Date(2025, 5, 10);
            Assert.IsTrue(d1.Equals(d2));
        }

        [TestMethod]
        public void Equals_Object_FalseForDifferentBoxedDate()
        {
            var d1 = new Date(2025, 5, 10);
            object d2 = new Date(2025, 5, 11);
            Assert.IsFalse(d1.Equals(d2));
        }

        [TestMethod]
        public void Equals_Object_FalseForNull()
        {
            var date = new Date(2025, 5, 10);
            Assert.IsFalse(date.Equals((object)null));
        }

        [TestMethod]
        public void Equals_Object_FalseForNonDateType()
        {
            var date = new Date(2025, 5, 10);
            Assert.IsFalse(date.Equals("2025-05-10"));
            Assert.IsFalse(date.Equals(42));
        }

        [TestMethod]
        public void Equals_Static_TrueForSameDates()
        {
            var d1 = new Date(2025, 9, 1);
            var d2 = new Date(2025, 9, 1);
            Assert.IsTrue(Date.Equals(d1, d2));
        }

        [TestMethod]
        public void Equals_Static_FalseForDifferentDates()
        {
            var d1 = new Date(2025, 9, 1);
            var d2 = new Date(2025, 9, 2);
            Assert.IsFalse(Date.Equals(d1, d2));
        }

        [TestMethod]
        public void GetHashCode_SameForEqualDates()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 10);
            Assert.AreEqual(d1.GetHashCode(), d2.GetHashCode());
        }

        [TestMethod]
        public void GetHashCode_DifferentForDifferentDates()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 11);
            Assert.AreNotEqual(d1.GetHashCode(), d2.GetHashCode());
        }

        #endregion

        #region Subtract

        [TestMethod]
        public void Subtract_Date_ReturnsTimeSpan()
        {
            var d1 = new Date(2025, 3, 20);
            var d2 = new Date(2025, 3, 10);
            Assert.AreEqual(TimeSpan.FromDays(10), d1.Subtract(d2));
        }

        [TestMethod]
        public void Subtract_TimeSpan_ReturnsDate()
        {
            var date = new Date(2025, 3, 20);
            var result = date.Subtract(TimeSpan.FromDays(5));
            Assert.AreEqual(new Date(2025, 3, 15), result);
        }

        #endregion

        #region ToString

        [TestMethod]
        public void ToLongString_ReturnsLongDateFormat()
        {
            var date = new Date(2025, 3, 15);
            var expected = new DateTime(2025, 3, 15).ToLongDateString();
            Assert.AreEqual(expected, date.ToLongString());
        }

        [TestMethod]
        public void ToShortString_ReturnsShortDateFormat()
        {
            var date = new Date(2025, 3, 15);
            var expected = new DateTime(2025, 3, 15).ToShortDateString();
            Assert.AreEqual(expected, date.ToShortString());
        }

        [TestMethod]
        public void ToString_Default_ReturnsShortString()
        {
            var date = new Date(2025, 3, 15);
            Assert.AreEqual(date.ToShortString(), date.ToString());
        }

        [TestMethod]
        public void ToString_WithFormatProvider()
        {
            var date = new Date(2025, 3, 15);
            var provider = CultureInfo.InvariantCulture;
            var expected = new DateTime(2025, 3, 15).ToString(provider);
            Assert.AreEqual(expected, date.ToString(provider));
        }

        [TestMethod]
        public void ToString_FormatO_ReturnsIsoDate()
        {
            var date = new Date(2025, 3, 15);
            Assert.AreEqual("2025-03-15", date.ToString("O"));
        }

        [TestMethod]
        public void ToString_FormatLowerO_ReturnsIsoDate()
        {
            var date = new Date(2025, 3, 15);
            Assert.AreEqual("2025-03-15", date.ToString("o"));
        }

        [TestMethod]
        public void ToString_FormatS_ReturnsIsoDate()
        {
            var date = new Date(2025, 3, 15);
            Assert.AreEqual("2025-03-15", date.ToString("s"));
        }

        [TestMethod]
        public void ToString_CustomFormat_ReturnsFormattedString()
        {
            var date = new Date(2025, 3, 15);
            Assert.AreEqual("15/03/2025", date.ToString("dd/MM/yyyy"));
        }

        [TestMethod]
        public void ToString_FormatAndProvider_ReturnsFormattedString()
        {
            var date = new Date(2025, 3, 15);
            var result = date.ToString("MMMM dd, yyyy", CultureInfo.InvariantCulture);
            Assert.AreEqual("March 15, 2025", result);
        }

        #endregion

        #region Parse

        [TestMethod]
        public void Parse_String_ReturnsCorrectDate()
        {
            var date = Date.Parse("2025-03-15");
            Assert.AreEqual(new Date(2025, 3, 15), date);
        }

        [TestMethod]
        public void Parse_WithProvider_ReturnsCorrectDate()
        {
            var date = Date.Parse("03/15/2025", CultureInfo.InvariantCulture);
            Assert.AreEqual(new Date(2025, 3, 15), date);
        }

        [TestMethod]
        public void Parse_WithProviderAndStyle_ReturnsCorrectDate()
        {
            var date = Date.Parse("  2025-03-15  ", CultureInfo.InvariantCulture, DateTimeStyles.AllowWhiteSpaces);
            Assert.AreEqual(new Date(2025, 3, 15), date);
        }

        #endregion

        #region ParseExact

        [TestMethod]
        public void ParseExact_SingleFormat_ReturnsCorrectDate()
        {
            var date = Date.ParseExact("15-03-2025", "dd-MM-yyyy", CultureInfo.InvariantCulture);
            Assert.AreEqual(new Date(2025, 3, 15), date);
        }

        [TestMethod]
        public void ParseExact_SingleFormatWithStyle_ReturnsCorrectDate()
        {
            var date = Date.ParseExact("15-03-2025", "dd-MM-yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None);
            Assert.AreEqual(new Date(2025, 3, 15), date);
        }

        [TestMethod]
        public void ParseExact_MultipleFormats_ReturnsCorrectDate()
        {
            var formats = new[] { "yyyy-MM-dd", "dd/MM/yyyy", "MM-dd-yyyy" };
            var date = Date.ParseExact("15/03/2025", formats, CultureInfo.InvariantCulture, DateTimeStyles.None);
            Assert.AreEqual(new Date(2025, 3, 15), date);
        }

        #endregion

        #region TryParse

        [TestMethod]
        public void TryParse_ValidString_ReturnsTrueAndCorrectDate()
        {
            bool success = Date.TryParse("2025-03-15", out Date result);
            Assert.IsTrue(success);
            Assert.AreEqual(new Date(2025, 3, 15), result);
        }

        [TestMethod]
        public void TryParse_InvalidString_ReturnsFalse()
        {
            bool success = Date.TryParse("not-a-date", out Date result);
            Assert.IsFalse(success);
        }

        [TestMethod]
        public void TryParse_WithProviderAndStyle_ValidString_ReturnsTrueAndCorrectDate()
        {
            bool success = Date.TryParse("03/15/2025", CultureInfo.InvariantCulture, DateTimeStyles.None, out Date result);
            Assert.IsTrue(success);
            Assert.AreEqual(new Date(2025, 3, 15), result);
        }

        [TestMethod]
        public void TryParse_WithProviderAndStyle_InvalidString_ReturnsFalse()
        {
            bool success = Date.TryParse("invalid", CultureInfo.InvariantCulture, DateTimeStyles.None, out Date result);
            Assert.IsFalse(success);
        }

        #endregion

        #region TryParseExact

        [TestMethod]
        public void TryParseExact_SingleFormat_ValidString_ReturnsTrueAndCorrectDate()
        {
            bool success = Date.TryParseExact("15-03-2025", "dd-MM-yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None, out Date result);
            Assert.IsTrue(success);
            Assert.AreEqual(new Date(2025, 3, 15), result);
        }

        [TestMethod]
        public void TryParseExact_SingleFormat_InvalidString_ReturnsFalse()
        {
            bool success = Date.TryParseExact("2025/03/15", "dd-MM-yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None, out Date result);
            Assert.IsFalse(success);
        }

        [TestMethod]
        public void TryParseExact_MultipleFormats_ValidString_ReturnsTrueAndCorrectDate()
        {
            var formats = new[] { "yyyy-MM-dd", "dd/MM/yyyy" };
            bool success = Date.TryParseExact("15/03/2025", formats, CultureInfo.InvariantCulture, DateTimeStyles.None, out Date result);
            Assert.IsTrue(success);
            Assert.AreEqual(new Date(2025, 3, 15), result);
        }

        [TestMethod]
        public void TryParseExact_MultipleFormats_InvalidString_ReturnsFalse()
        {
            var formats = new[] { "yyyy-MM-dd", "dd/MM/yyyy" };
            bool success = Date.TryParseExact("not-valid", formats, CultureInfo.InvariantCulture, DateTimeStyles.None, out Date result);
            Assert.IsFalse(success);
        }

        #endregion

        #region FromDateTime / FromDayNumber / DayNumber

        [TestMethod]
        public void FromDateTime_StripsTimeComponent()
        {
            var dateTime = new DateTime(2025, 7, 4, 18, 30, 45);
            Date date = Date.FromDateTime(dateTime);
            Assert.AreEqual(2025, date.Year);
            Assert.AreEqual(7, date.Month);
            Assert.AreEqual(4, date.Day);
            Assert.AreEqual(new DateTime(2025, 7, 4), (DateTime)date);
        }

        [TestMethod]
        public void DayNumber_ReturnsCorrectValue()
        {
            var minDate = Date.MinValue;
            Assert.AreEqual(0, minDate.DayNumber);

            var date = new Date(2, 1, 1);
            Assert.AreEqual(365, date.DayNumber);
        }

        [TestMethod]
        public void DayNumber_RoundTripsWithFromDayNumber()
        {
            var original = new Date(2025, 3, 15);
            int dayNumber = original.DayNumber;
            var reconstructed = Date.FromDayNumber(dayNumber);
            Assert.AreEqual(original, reconstructed);
        }

        [TestMethod]
        public void FromDayNumber_Zero_ReturnsMinValue()
        {
            var date = Date.FromDayNumber(0);
            Assert.AreEqual(Date.MinValue, date);
        }

        [TestMethod]
        public void FromDayNumber_KnownValue()
        {
            var expected = new Date(2025, 1, 1);
            var date = Date.FromDayNumber(expected.DayNumber);
            Assert.AreEqual(expected, date);
        }

        #endregion

        #region Deconstruct

        [TestMethod]
        public void Deconstruct_ReturnsCorrectComponents()
        {
            var date = new Date(2025, 8, 23);
            var (year, month, day) = date;
            Assert.AreEqual(2025, year);
            Assert.AreEqual(8, month);
            Assert.AreEqual(23, day);
        }

        [TestMethod]
        public void Deconstruct_MinValue()
        {
            var (year, month, day) = Date.MinValue;
            Assert.AreEqual(1, year);
            Assert.AreEqual(1, month);
            Assert.AreEqual(1, day);
        }

        #endregion

        #region ToDateTime Overloads

        [TestMethod]
        public void ToDateTime_WithTime_ReturnsCorrectDateTime()
        {
            var date = new Date(2025, 3, 15);
            DateTime result = date.ToDateTime(10, 30, 45);
            Assert.AreEqual(new DateTime(2025, 3, 15, 10, 30, 45), result);
        }

        [TestMethod]
        public void ToDateTime_WithMidnight_MatchesImplicitConversion()
        {
            var date = new Date(2025, 3, 15);
            DateTime fromMethod = date.ToDateTime(0, 0, 0);
            DateTime fromImplicit = date;
            Assert.AreEqual(fromImplicit, fromMethod);
        }

        [TestMethod]
        public void ToDateTime_WithTimeAndKind_ReturnsCorrectDateTimeAndKind()
        {
            var date = new Date(2025, 3, 15);
            DateTime result = date.ToDateTime(14, 0, 0, DateTimeKind.Utc);
            Assert.AreEqual(new DateTime(2025, 3, 15, 14, 0, 0, DateTimeKind.Utc), result);
            Assert.AreEqual(DateTimeKind.Utc, result.Kind);
        }

        [TestMethod]
        public void ToDateTime_WithLocalKind_ReturnsLocalKind()
        {
            var date = new Date(2025, 6, 20);
            DateTime result = date.ToDateTime(8, 15, 30, DateTimeKind.Local);
            Assert.AreEqual(DateTimeKind.Local, result.Kind);
            Assert.AreEqual(2025, result.Year);
            Assert.AreEqual(6, result.Month);
            Assert.AreEqual(20, result.Day);
            Assert.AreEqual(8, result.Hour);
            Assert.AreEqual(15, result.Minute);
            Assert.AreEqual(30, result.Second);
        }

        #endregion

        #region Extension Methods

        [TestMethod]
        public void ToDate_Extension_StripsTime()
        {
            var dateTime = new DateTime(2025, 8, 20, 16, 45, 30);
            Date date = dateTime.ToDate();
            Assert.AreEqual(2025, date.Year);
            Assert.AreEqual(8, date.Month);
            Assert.AreEqual(20, date.Day);
        }

        [TestMethod]
        public void ToDateTime_Extension_ReturnsMidnight()
        {
            var date = new Date(2025, 8, 20);
            DateTime dateTime = date.ToDateTime();
            Assert.AreEqual(new DateTime(2025, 8, 20, 0, 0, 0), dateTime);
        }

        #endregion
    }
}
