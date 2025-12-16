/**
 * Account TypeScript - File chính mà developer viết code
 * Sử dụng AccountForm module để có IntelliSense (chấm thả) đầy đủ
 * KHÔNG cần file .d.ts riêng nữa!
 */

import { AccountForm, OptionSet } from './generator/Account.form';

// ============================================================================
// Account Form Handler - Ví dụ đơn giản
// ============================================================================

const formAccount = (function () {
    "use strict";

    // Khai báo form với kiểu AccountForm - TypeScript tự động có IntelliSense!
    let form: AccountForm;

    /**
     * OnLoad handler
     * @param executionContext Execution context từ Dataverse
     */
    async function onLoad(executionContext: any): Promise<void> {
        // Khởi tạo form - TypeScript biết form là AccountForm
        form = new AccountForm(executionContext);

        registerEvents();

        // Thêm callback khi form loaded hoàn toàn
        form.UiAddLoaded(UiAddLoaded);
    }

    /**
     * Register events
     */
    function registerEvents(): void {
        // Check if this is initial load
        if (form.ExecutionContext.IsInitialLoad()) {
            // Thêm các event handlers ở đây

            // Ví dụ: Add onChange cho AccountNumber
            form.Body.AccountNumber.AddOnChange(onAccountNumberChange);

            // Ví dụ: Add onChange cho Name
            form.Body.Name.AddOnChange(onNameChange);

            // Ví dụ: Add PreSearch cho PrimaryContactId lookup
            form.Body.PrimaryContactId.AddPreSearch(onPrimaryContactIdPreSearch);
        }
    }

    // ========================================================================
    // BEGIN ON LOAD
    // ========================================================================

    /**
     * Được gọi khi UI đã loaded hoàn toàn
     * @param executionContext Execution context
     */
    async function UiAddLoaded(executionContext: any): Promise<void> {
        // Ví dụ: Lấy giá trị AccountNumber - TypeScript biết đây là string!
        const accountNumber = form.Body.AccountNumber.Value;
        console.log('Account Number:', accountNumber);

        // Ví dụ: Lấy giá trị Name - TypeScript biết đây là string!
        const name = form.Body.Name.Value;
        console.log('Name:', name);

        // Ví dụ: Lấy giá trị Revenue - TypeScript biết đây là number!
        const revenue = form.Body.Revenue.Value;
        console.log('Revenue:', revenue);

        // Ví dụ: Lấy giá trị CreditOnHold - TypeScript biết đây là boolean!
        const creditOnHold = form.Body.CreditOnHold.Value;
        console.log('Credit On Hold:', creditOnHold);

        // Ví dụ: Lấy giá trị IndustryCode - TypeScript biết đây là number (OptionSet)!
        const industryCode = form.Body.IndustryCode.Value;
        console.log('Industry Code:', industryCode);

        // Ví dụ: So sánh với OptionSet values
        if (industryCode === OptionSet.Account.IndustryCode.Consulting) {
            console.log('This is a Consulting account!');
        }

        // Ví dụ: Lấy PrimaryContactId lookup value - TypeScript biết đây là array!
        const primaryContact = form.Body.PrimaryContactId.Value;
        if (primaryContact && primaryContact.length > 0) {
            console.log('Primary Contact ID:', primaryContact[0].id);
            console.log('Primary Contact Name:', primaryContact[0].name);
            console.log('Primary Contact Entity:', primaryContact[0].entityType);
        }

        // Ví dụ: Kiểm tra Form Type
        if (form.FormType === 1) {
            console.log('This is a Create form');
        } else if (form.FormType === 2) {
            console.log('This is an Update form');
        }

        // Ví dụ: Set form notification
        form.SetFormNotification('Welcome to Account form!', 'INFO', 'welcomeNotification');

        // Clear notification sau 5 giây
        setTimeout(() => {
            form.ClearFormNotification('welcomeNotification');
        }, 5000);
    }

    // ========================================================================
    // END ON LOAD
    // ========================================================================

    // ========================================================================
    // BEGIN ON CHANGE
    // ========================================================================

    /**
     * OnChange handler cho AccountNumber
     * @param executionContext Execution context
     */
    function onAccountNumberChange(executionContext: any): void {
        const accountNumber = form.Body.AccountNumber.Value;

        // Ví dụ: Validate AccountNumber format
        if (accountNumber && accountNumber.length < 5) {
            form.Body.AccountNumber.SetNotification('Account Number must be at least 5 characters', 'accountNumberValidation');
            form.Body.AccountNumber.SetIsValid(false, 'Account Number is too short');
        } else {
            form.Body.AccountNumber.ClearNotification('accountNumberValidation');
            form.Body.AccountNumber.SetIsValid(true);
        }
    }

    /**
     * OnChange handler cho Name
     * @param executionContext Execution context
     */
    function onNameChange(executionContext: any): void {
        const name = form.Body.Name.Value;

        // Ví dụ: Auto-uppercase Name
        if (name) {
            // Không set lại nếu đã uppercase để tránh infinite loop
            const uppercaseName = name.toUpperCase();
            if (name !== uppercaseName) {
                form.Body.Name.Value = uppercaseName;
            }
        }
    }

    // ========================================================================
    // END ON CHANGE
    // ========================================================================

    // ========================================================================
    // BEGIN PRE SEARCH
    // ========================================================================

    /**
     * PreSearch handler cho PrimaryContactId lookup
     */
    function onPrimaryContactIdPreSearch(): void {
        // Ví dụ: Thêm custom filter cho PrimaryContactId
        // Chỉ hiển thị contacts thuộc account cha (nếu có)
        const parentAccountId = form.Body.ParentAccountId.Value;

        if (parentAccountId && parentAccountId.length > 0) {
            const filter = `
                <filter type="and">
                    <condition attribute="parentcustomerid" operator="eq" value="${parentAccountId[0].id}" />
                </filter>
            `;
            form.Body.PrimaryContactId.AddCustomFilter(filter, 'contact');
        }
    }

    // ========================================================================
    // END PRE SEARCH
    // ========================================================================

    // ========================================================================
    // BEGIN OTHERS - Các helper functions
    // ========================================================================

    /**
     * Helper function: Ẩn/Hiện các fields dựa trên điều kiện
     * @param visible true để hiện, false để ẩn
     */
    function setContactFieldsVisibility(visible: boolean): void {
        form.Body.DoNotEMail.Visible = visible;
        form.Body.DoNotPhone.Visible = visible;
        form.Body.DoNotFax.Visible = visible;
        form.Body.DoNotBulkEMail.Visible = visible;
        form.Body.DoNotPostalMail.Visible = visible;
    }

    /**
     * Helper function: Lock/Unlock các fields
     * @param disabled true để disable, false để enable
     */
    function setAddressFieldsDisabled(disabled: boolean): void {
        form.Body.Address1_Line1.Disabled = disabled;
        form.Body.Address1_Line2.Disabled = disabled;
        form.Body.Address1_City.Disabled = disabled;
        form.Body.Address1_PostalCode.Disabled = disabled;
        form.Body.Address1_StateOrProvince.Disabled = disabled;
        form.Body.Address1_Country.Disabled = disabled;
    }

    /**
     * Helper function: Set required fields
     */
    function setRequiredFields(): void {
        form.Body.Name.RequiredLevel = 'required';
        form.Body.Telephone1.RequiredLevel = 'recommended';
        form.Body.EMailAddress1.RequiredLevel = 'recommended';
    }

    /**
     * Ví dụ: Sử dụng Tab
     */
    function toggleDetailsTab(): void {
        // Ẩn/Hiện tab DETAILS_TAB
        const isVisible = form.Tab.DETAILS_TAB.Visible;
        form.Tab.DETAILS_TAB.Visible = !isVisible;

        // Expand/Collapse tab
        if (form.Tab.DETAILS_TAB.DisplayState === 'expanded') {
            form.Tab.DETAILS_TAB.DisplayState = 'collapsed';
        } else {
            form.Tab.DETAILS_TAB.DisplayState = 'expanded';
        }
    }

    /**
     * Ví dụ: Sử dụng Grid
     */
    function refreshContactsGrid(): void {
        // Refresh grid Contacts
        form.Grid.Contacts.Refresh();

        // Lấy total record count
        const totalRecords = form.Grid.Contacts.TotalRecordCount;
        console.log('Total Contacts:', totalRecords);

        // Ẩn grid nếu không có records
        if (totalRecords === 0) {
            form.Grid.Contacts.Visible = false;
        }
    }

    /**
     * Ví dụ: Sử dụng Navigation
     */
    function setupNavigation(): void {
        // Ẩn navigation items không cần thiết
        form.Navigation.account_adx_inviteredemptions.Visible = false;
        form.Navigation.account_adx_portalcomments.Visible = false;
    }

    // ========================================================================
    // END OTHERS
    // ========================================================================

    // Export các functions public
    return {
        OnLoad: onLoad
    };
})();

// Export để có thể sử dụng trong Dataverse
// @ts-ignore - Dataverse sử dụng global scope
(window as any).formAccount = formAccount;

// Export default cho module
export default formAccount;
