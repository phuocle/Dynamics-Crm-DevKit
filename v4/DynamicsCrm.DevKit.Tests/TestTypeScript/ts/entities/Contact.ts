import { ContactForm } from './generator/Contact.form';

const formContact = (function () {
    "use strict";

    let form: ContactForm;

    async function onLoad(executionContext: any): Promise<void> {
        form = new ContactForm(executionContext);
        registerEvents();
        form.UiAddLoaded(UiAddLoaded);
    }

    function registerEvents(): void {
        if (form.ExecutionContext.IsInitialLoad()) {
            if (form.FormType == OptionSet.FormType.Create) {
                // Example: Use Contact-specific OptionSet
                // form.Body.GenderCode.Value = OptionSet.Contact.GenderCode.Male;
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

export default formContact;
