/**
 * Contact TypeScript - File chính mà developer viết code
 * Sử dụng ContactForm module để có IntelliSense đầy đủ
 */

import { ContactForm, OptionSet } from './generator/Contact.form';

// ============================================================================
// Contact Form Handler
// ============================================================================

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
            form.Body.FirstName.AddOnChange(onNameChange);
            form.Body.LastName.AddOnChange(onNameChange);
        }
    }

    async function UiAddLoaded(executionContext: any): Promise<void> {
        // Ví dụ: Lấy thông tin contact
        const firstName = form.Body.FirstName.Value;
        const lastName = form.Body.LastName.Value;
        const email = form.Body.EMailAddress1.Value;

        console.log('Contact:', firstName, lastName);
        console.log('Email:', email);

        // Lấy lookup value
        const parentCustomer = form.Body.ParentCustomerId.Value;
        if (parentCustomer && parentCustomer.length > 0) {
            console.log('Parent Customer:', parentCustomer[0].name);
        }
    }

    function onNameChange(executionContext: any): void {
        const firstName = form.Body.FirstName.Value || '';
        const lastName = form.Body.LastName.Value || '';

        // Validate: At least one name is required
        if (!firstName && !lastName) {
            form.Body.LastName.SetNotification('First Name or Last Name is required', 'nameValidation');
        } else {
            form.Body.LastName.ClearNotification('nameValidation');
        }
    }

    return {
        OnLoad: onLoad
    };
})();

// Export to global scope for Dataverse
(window as any).formContact = formContact;

export default formContact;
