using Bogus;
using System;

namespace Dev.DevKit.Shared.Test
{
    public static class FakerHelper
    {
        private static readonly Faker _faker = new Faker();

        public static Guid GenerateGuid() => _faker.Random.Guid();

        public static string GenerateFirstName() => _faker.Name.FirstName();

        public static string GenerateLastName() => _faker.Name.LastName();

        public static string GenerateEmail() => _faker.Internet.Email();

        public static string GenerateCompanyName() => _faker.Company.CompanyName();

        public static string GenerateAddress() => _faker.Address.FullAddress();

        public static int GenerateInteger(int min = 1, int max = 1000) => _faker.Random.Int(min, max);

        public static decimal GenerateDecimal(decimal min = 0, decimal max = 10000) => _faker.Random.Decimal(min, max);

        public static bool GenerateBoolean() => _faker.Random.Bool();

        public static DateTime GenerateRecentDate() => _faker.Date.Recent();

        public static DateTime GenerateFutureDate() => _faker.Date.Soon();

        public static DateTime GenerateDateBetween(DateTime from, DateTime to) => _faker.Date.Between(from, to);
    }
}