import { AccountForm, OptionSet } from './generator/Account.form';

const formAccount = (function () {
    "use strict";

    let form: AccountForm;

    async function onLoad(executionContext: any): Promise<void> {
        form = new AccountForm(executionContext);
        registerEvents();
        form.UiAddLoaded(UiAddLoaded);
    }

    function registerEvents(): void {
        if (form.ExecutionContext.IsInitialLoad()) {
            // BEGIN EVENTS
            var accountNumber = form.Body.AccountNumber.Value;
            // END EVENTS
        }
    }

    // ========================================================================
    // BEGIN ON LOAD
    // ========================================================================

    async function UiAddLoaded(executionContext: any): Promise<void> {
        // BEGIN ON LOAD LOGIC

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
