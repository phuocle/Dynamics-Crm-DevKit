import { FormAccount_DevKitV4, FormAccount } from './Account.form';
import { TestControl } from './Account.Test00.Control';
import { TestString } from './Account.Test01.String';
import { TestMemo } from './Account.Test02.Memo';
import { TestBoolean } from './Account.Test03.Boolean';
import { TestInteger } from './Account.Test04.Integer';
import { TestHeader } from './Account.Test04A.Header';
import { TestDecimal } from './Account.Test05.Decimal';
import { TestDouble } from './Account.Test06.Double';
import { TestMoney } from './Account.Test07.Money';
import { TestLookup } from './Account.Test08.Lookup';
import { TestLookup1 } from './Account.Test08A.Lookup1';
import { TestOptionSet } from './Account.Test09.OptionSet';
import { TestMultiOptionSet } from './Account.Test10.MultiOptionSet';
import { TestDateOnly } from './Account.Test11.DateOnly';
import { TestDateTime } from './Account.Test12.DateTime';
import { TestGrid } from './Account.Test13.Grid';
import { TestQuickView } from './Account.Test14.QuickView';
import { TestNavigationItem } from './Account.Test15.NavigationItem';
import { TestExecutionContext } from './Account.Test16.ExecutionContext';
import { TestSidePanes } from './Account.Test17.SidePanes';
import { TestCopilot } from './Account.Test18.Copilot';
import { TestProcess } from './Account.Test19.Process';
import { TestIFrame } from './Account.Test20.IFrame';
import { TestUtility } from './Account.Test21.Utility';
import { TestTab } from './Account.Test22.Tab';
import { TestTimer } from './Account.Test23.Timer';
import { TestKnowledge } from './Account.Test24.Knowledge';
import { TestWebApi } from './Account.Test25.WebApi';
import { TestWebResource } from './Account.Test26.WebResource';

const formAccount_DevKitV4 = (function () {
    "use strict";

    let form: FormAccount_DevKitV4.Form;

    async function onLoad(executionContext: any): Promise<void> {
        form = new FormAccount_DevKitV4.Form(executionContext);
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

        // Wait 1 second after OnLoad to allow form to fully load
        // Then clear console and run real tests
        setTimeout(async () => {
            console.clear();
            let passedSuites = 0;
            let totalSuites = 0;

            // Test 0: Control - IControl Interface (base for all controls)
            if (TestControl(form)) passedSuites++; totalSuites++;

            // Test 1: String Control
            if (TestString(form)) passedSuites++; totalSuites++;

            // Test 2: Memo Control
            if (TestMemo(form)) passedSuites++; totalSuites++;

            // Test 3: Boolean Control
            if (TestBoolean(form)) passedSuites++; totalSuites++;

            // Test 4: Integer Control (Body)
            if (TestInteger(form)) passedSuites++; totalSuites++;

            // Test 4A: Header Control - Tests header field behavior (using v4_Integer1)
            if (TestHeader(form)) passedSuites++; totalSuites++;

            // Test 5: Decimal Control
            if (TestDecimal(form)) passedSuites++; totalSuites++;

            // Test 6: Double Control
            if (TestDouble(form)) passedSuites++; totalSuites++;

            // Test 7: Money Control
            if (TestMoney(form)) passedSuites++; totalSuites++;

            // Test 8: Lookup Control
            if (TestLookup(form)) passedSuites++; totalSuites++;

            // Test 8A: Lookup1 Control - Multi Control per Attribute (OwnerId has 2 controls: OwnerId, OwnerId1)
            if (TestLookup1(form)) passedSuites++; totalSuites++;

            // Test 9: OptionSet Control
            if (TestOptionSet(form)) passedSuites++; totalSuites++;

            // Test 10: MultiOptionSet Control
            if (TestMultiOptionSet(form)) passedSuites++; totalSuites++;

            // Test 11: DateOnly Control
            if (TestDateOnly(form)) passedSuites++; totalSuites++;

            // Test 12: DateTime Control
            if (TestDateTime(form)) passedSuites++; totalSuites++;

            // Test 13: Grid Control
            if (TestGrid(form)) passedSuites++; totalSuites++;

            // Test 14: QuickView Control
            if (TestQuickView(form)) passedSuites++; totalSuites++;

            // Test 15: NavigationItem Control
            if (TestNavigationItem(form)) passedSuites++; totalSuites++;

            // Test 16: ExecutionContext
            if (TestExecutionContext(form)) passedSuites++; totalSuites++;

            // Test 17: SidePanes
            if (TestSidePanes(form)) passedSuites++; totalSuites++;

            // Test 18: Copilot (Preview)
            if (TestCopilot(form)) passedSuites++; totalSuites++;

            // Test 19: Process (BPF)
            if (TestProcess(form)) passedSuites++; totalSuites++;

            // Test 20: IFrame Control
            if (TestIFrame(form)) passedSuites++; totalSuites++;

            // Test 21: Utility API
            if (TestUtility(form)) passedSuites++; totalSuites++;

            // Test 22: Tab Control
            if (TestTab(form)) passedSuites++; totalSuites++;

            // Test 23: Timer Control
            if (TestTimer(form)) passedSuites++; totalSuites++;

            // Test 24: Knowledge Control
            if (TestKnowledge(form)) passedSuites++; totalSuites++;

            // Test 25: WebApi
            if (await TestWebApi(form)) passedSuites++; totalSuites++;

            // Test 26: WebResource Control
            if (TestWebResource(form)) passedSuites++; totalSuites++;

            console.log(`%cTỔNG SỐ LƯỢNG TEST: ${totalSuites} / ${passedSuites} ĐÃ PASSED`, "font-weight: bold; font-size: 20px; color: #E91E63;");

        }, 1000);

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

const formAccount = (function () {
    "use strict";

    let form: FormAccount.Form;

    async function onLoad(executionContext: any): Promise<void> {
        debugger;
        form = new FormAccount.Form(executionContext);
    }

    return {
        OnLoad: onLoad
    };
})();

export { formAccount_DevKitV4, formAccount };