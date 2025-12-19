import { AccountForm } from './generator/Account.form';
import { AccountApi } from './generator/Account.webapi';
import './generator/OptionSet'; // Import centralized OptionSets
import { TestControl } from './Account.TestControl';
import { TestLookup } from './Account.TestLookup';
import { TestMemo } from './Account.TestMemo';
import { TestString } from './Account.TestString';
import { TestInteger } from './Account.TestInteger';
import { TestOptionSet } from './Account.TestOptionSet';

const formAccount = (function () {
    "use strict";

    let form: AccountForm.Form;

    async function onLoad(executionContext: any): Promise<void> {
        form = new AccountForm.Form(executionContext);
        registerEvents();
        form.UiAddLoaded(UiAddLoaded);
    }

    function registerEvents(): void {
        if (form.ExecutionContext.IsInitialLoad()) {
        }
    }

    // ========================================================================
    // BEGIN ON LOAD
    // ========================================================================

    async function UiAddLoaded(executionContext: any): Promise<void> {
        // BEGIN ON LOAD LOGIC

        // Wait 10 seconds after OnLoad to allow form to fully load
        // Then clear console and run real tests
        setTimeout(() => {
            console.clear();

            // Test 0: IControl Interface (base for all controls)
            TestControl(form);

            // Test 1: Lookup Control
            TestLookup(form);

            // Test 2: Memo Control
            TestMemo(form);

            // Test 3: String Control
            TestString(form);

            // Test 4: Integer Control
            TestInteger(form);

            // Test 5: OptionSet Control
            TestOptionSet(form);

        }, 10000);

        // ====================================================================
        // DEMO: WebApi early-bound style (like C#)
        // ====================================================================

        // Example 1: Create empty Account object
        const newAccount = AccountApi();
        newAccount.Name = 'Contoso Ltd';
        newAccount.Telephone1 = '123-456-7890';
        newAccount.IndustryCode = OptionSet.Account.IndustryCode.Consulting;
        console.log('New Account Entity:', newAccount.Entity);

        // Example 2: Retrieve and access properties with dot notation
        const accountId = form.EntityId;
        form.WebApi.RetrieveRecord(AccountApi, 'account', accountId, '?$select=name,telephone1,industrycode')
            .then((account: ReturnType<typeof AccountApi>) => {
                console.log('=== WebApi Early-Bound Demo ===');
                console.log('Account Name:', account.Name);
                console.log('Phone:', account.Telephone1);
                console.log('Industry Code:', account.IndustryCode);
                console.log('Industry (Formatted):', account.FormattedValue.IndustryCode);
                console.log('Entity Name:', account.EntityName);
                console.log('Entity Collection:', account.EntityCollectionName);
            });

        // END ON LOAD LOGIC
    }

    // ========================================================================
    // END ON LOAD
    // ========================================================================

    // ========================================================================
    // BEGIN ON CHANGE
    // ========================================================================

    // END ON CHANGE
    // ========================================================================

    // ========================================================================
    // BEGIN PRE SEARCH
    // ========================================================================

    // END PRE SEARCH
    // ========================================================================

    // ========================================================================
    // BEGIN OTHERS
    // ========================================================================

    // END OTHERS
    // ========================================================================

    return {
        OnLoad: onLoad
    };
})();

export default formAccount;
