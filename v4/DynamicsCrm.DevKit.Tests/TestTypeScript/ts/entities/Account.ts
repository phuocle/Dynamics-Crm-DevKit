import { AccountForm } from './generator/Account.form';
import { TestControl } from './Account.TestControl';
import { TestLookup } from './Account.TestLookup';
import { TestMemo } from './Account.TestMemo';

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
