import { AccountForm } from './generator/Account.form';

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
            if (form.FormType == OptionSet.FormType.Create) {
                // Example: Using OptionSet values
                var industryTech = OptionSet.Account.IndustryCode.Technology;
                var categoryA = OptionSet.Account.v4_Categories.Category_A;
            }
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
