import { AccountForm } from './generator/Account.form';
import { TestControl } from './Account.TestControl';
import { TestLookup } from './Account.TestLookup';
import { TestMemo } from './Account.TestMemo';
import { TestString } from './Account.TestString';
import { TestInteger } from './Account.TestInteger';
import { TestOptionSet } from './Account.TestOptionSet';
import { TestWebApi } from './Account.TestWebApi';
import { TestMoney } from './Account.TestMoney';
import { TestBoolean } from './Account.TestBoolean';
import { TestDateTime } from './Account.TestDateTime';
import { TestDateOnly } from './Account.TestDateOnly';
import { TestGrid } from './Account.TestGrid';
import { TestUtility } from './Account.TestUtility';

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
        setTimeout(async () => {
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

            // Test 6: WebApi 
            await TestWebApi(form);

            // Test 7: Money Control
            TestMoney(form);

            // Test 8: Boolean Control
            TestBoolean(form);

            // Test 9: DateTime Control
            TestDateTime(form);

            // Test 10: DateOnly Control
            TestDateOnly(form);

            // Test 11: Grid Control
            TestGrid(form);

            // Test 12: Utility API
            TestUtility(form);

        }, 10000);

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
