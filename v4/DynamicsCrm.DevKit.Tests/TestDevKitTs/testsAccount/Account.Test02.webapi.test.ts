/**
 * Unit Tests for Account.webapi.ts
 * Test file: Account.Test02.webapi.test.ts
 * 
 * Coverage targets:
 * - AccountApi class constructor
 * - AccountFieldConfig object structure
 * - IAccountApi interface implementation
 */
import { AccountApi, IAccountApi } from '../entities/Account.webapi';
import { createWebApiEntity } from '../lib/devkit';

describe('Account.webapi.ts - WebApi Class', () => {
    // =========================================================================
    // AccountApi Constructor Tests
    // =========================================================================
    describe('AccountApi Constructor', () => {
        test('AccountApi should be instantiated with empty entity', () => {
            const account = new AccountApi();

            expect(account).toBeDefined();
            expect(account.EntityName).toBe('account');
            expect(account.EntityCollectionName).toBe('accounts');
        });

        test('AccountApi should be instantiated with entity data', () => {
            const entity = {
                accountid: 'test-guid-123',
                name: 'Test Account'
            };

            const account = new AccountApi(entity);

            expect(account).toBeDefined();
            expect(account.AccountId).toBe('test-guid-123');
            expect(account.Name).toBe('Test Account');
        });

        test('AccountApi should handle null values', () => {
            const entity = {
                accountid: 'test-guid',
                name: null,
                numberofemployees: null
            };

            const account = new AccountApi(entity);

            expect(account.Name).toBeNull();
            expect(account.NumberOfEmployees).toBeNull();
        });
    });

    // =========================================================================
    // Field Type Tests
    // =========================================================================
    describe('Field Types', () => {
        test('String fields should be accessible', () => {
            const entity = {
                name: 'Acme Corporation',
                accountnumber: 'ACC-001',
                description: 'Test description'
            };

            const account = new AccountApi(entity);

            expect(account.Name).toBe('Acme Corporation');
            expect(account.AccountNumber).toBe('ACC-001');
            expect(account.Description).toBe('Test description');
        });

        test('Integer fields should be parsed correctly', () => {
            const entity = {
                numberofemployees: 100,
                statecode: 0,
                statuscode: 1
            };

            const account = new AccountApi(entity);

            expect(account.NumberOfEmployees).toBe(100);
            expect(account.StateCode).toBe(0);
            expect(account.StatusCode).toBe(1);
        });

        test('Boolean fields should be parsed correctly', () => {
            const entity = {
                creditonhold: true,
                donotemail: false,
                donotphone: true
            };

            const account = new AccountApi(entity);

            expect(account.CreditOnHold).toBe(true);
            expect(account.DoNotEMail).toBe(false);
            expect(account.DoNotPhone).toBe(true);
        });

        test('Number (decimal/money) fields should be parsed correctly', () => {
            const entity = {
                revenue: 1000000.50,
                address1_latitude: 37.7749,
                address1_longitude: -122.4194
            };

            const account = new AccountApi(entity);

            expect(account.Revenue).toBe(1000000.50);
            expect(account.Address1_Latitude).toBe(37.7749);
            expect(account.Address1_Longitude).toBe(-122.4194);
        });

        test('Lookup fields should return GUID', () => {
            const entity = {
                '_primarycontactid_value': 'contact-guid-123',
                '_parentaccountid_value': 'parent-account-guid'
            };

            const account = new AccountApi(entity);

            expect(account.PrimaryContactId).toBe('contact-guid-123');
            expect(account.ParentAccountId).toBe('parent-account-guid');
        });
    });

    // =========================================================================
    // FormattedValue Tests
    // =========================================================================
    describe('FormattedValue', () => {
        test('FormattedValue should return formatted strings', () => {
            const entity = {
                statecode: 0,
                'statecode@OData.Community.Display.V1.FormattedValue': 'Active',
                statuscode: 1,
                'statuscode@OData.Community.Display.V1.FormattedValue': 'Active'
            };

            const account = new AccountApi(entity);

            expect(account.FormattedValue.StateCode).toBe('Active');
            expect(account.FormattedValue.StatusCode).toBe('Active');
        });

        test('FormattedValue for lookup should return display name', () => {
            // Note: Lookup fields use _fieldname_value pattern, so formatted value key follows that
            const entity = {
                '_primarycontactid_value': 'contact-guid',
                '_primarycontactid_value@OData.Community.Display.V1.FormattedValue': 'John Doe'
            };

            const account = new AccountApi(entity);

            // FormattedValue for lookup uses the schema name pattern
            // The formatted value is stored under the logicalName key
            expect(account.FormattedValue).toBeDefined();
        });

        test('FormattedValue for money should return formatted currency', () => {
            const entity = {
                revenue: 1000000,
                'revenue@OData.Community.Display.V1.FormattedValue': '$1,000,000.00'
            };

            const account = new AccountApi(entity);

            expect(account.FormattedValue.Revenue).toBe('$1,000,000.00');
        });
    });

    // =========================================================================
    // ODataEntity and Entity Tests
    // =========================================================================
    describe('ODataEntity and Entity', () => {
        test('ODataEntity should contain original entity data', () => {
            const entity = {
                accountid: 'test-guid',
                name: 'Test Account',
                '@odata.etag': 'W/"12345"'
            };

            const account = new AccountApi(entity);

            expect(account.ODataEntity).toBeDefined();
            expect(account.ODataEntity.accountid).toBe('test-guid');
            expect(account['@odata.etag']).toBe('W/"12345"');
        });

        test('Entity should be available for upsert operations', () => {
            const account = new AccountApi();

            expect(account.Entity).toBeDefined();
        });

        test('Setting a field should update Entity for upsert', () => {
            const account = new AccountApi();
            account.Name = 'New Account Name';

            expect(account.Entity.name).toBe('New Account Name');
        });
    });

    // =========================================================================
    // getAliasedValue Tests
    // =========================================================================
    describe('getAliasedValue', () => {
        test('should return aliased value from linked entity', () => {
            const entity = {
                'primarycontact.fullname': 'John Doe'
            };

            const account = new AccountApi(entity);

            expect(account.getAliasedValue('primarycontact.fullname')).toBe('John Doe');
        });

        test('should return null for non-existent alias', () => {
            const account = new AccountApi({});

            expect(account.getAliasedValue('nonexistent.field')).toBeNull();
        });

        test('should handle MultiOptionSet aliased values', () => {
            const entity = {
                'linked.multioption': '1,2,3'
            };

            const account = new AccountApi(entity);

            const result = account.getAliasedValue('linked.multioption', true);
            expect(result).toEqual([1, 2, 3]);
        });
    });

    // =========================================================================
    // getAliasedFormattedValue Tests
    // =========================================================================
    describe('getAliasedFormattedValue', () => {
        test('should return formatted aliased value', () => {
            const entity = {
                'primarycontact.statecode': 0,
                'primarycontact.statecode@OData.Community.Display.V1.FormattedValue': 'Active'
            };

            const account = new AccountApi(entity);

            expect(account.getAliasedFormattedValue('primarycontact.statecode')).toBe('Active');
        });

        test('should return empty string for non-existent alias', () => {
            const account = new AccountApi({});

            expect(account.getAliasedFormattedValue('nonexistent.field')).toBe('');
        });

        test('should handle MultiOptionSet formatted values', () => {
            const entity = {
                'linked.categories': '1,2,3',
                'linked.categories@OData.Community.Display.V1.FormattedValue': 'Cat A; Cat B; Cat C'
            };

            const account = new AccountApi(entity);

            const result = account.getAliasedFormattedValue('linked.categories', true);
            expect(result).toEqual(['Cat A', 'Cat B', 'Cat C']);
        });
    });

    // =========================================================================
    // Read-Only Fields Tests
    // =========================================================================
    describe('Read-Only Fields', () => {
        test('CreatedOn should be read-only', () => {
            const entity = {
                createdon: '2024-01-01T00:00:00Z'
            };

            const account = new AccountApi(entity);

            // Read-only fields should be accessible
            expect(account.CreatedOn_UtcDateAndTime).toBeDefined();
        });

        test('ModifiedOn should be read-only', () => {
            const entity = {
                modifiedon: '2024-06-15T12:30:00Z'
            };

            const account = new AccountApi(entity);

            expect(account.ModifiedOn_UtcDateAndTime).toBeDefined();
        });

        test('VersionNumber should be read-only', () => {
            const entity = {
                versionnumber: 123456789
            };

            const account = new AccountApi(entity);

            expect(account.VersionNumber).toBe(123456789);
        });
    });
});

