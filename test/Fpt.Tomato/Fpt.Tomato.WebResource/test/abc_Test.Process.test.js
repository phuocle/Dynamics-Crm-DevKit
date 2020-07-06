//@ts-check
define(['xrm-mock'], () => {
    var xrmMock = require('xrm-mock');
    describe('', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Process', () => {
            var stage1 = new xrmMock.StageMock("stage1", "Start", XrmEnum.StageStatus.Active, XrmEnum.StageCategory.Identify, [new xrmMock.StepMock("Stage1Step1", "abc_all", true), new xrmMock.StepMock("Stage1Step2", "abc_all2", true)]);
            var stage2 = new xrmMock.StageMock("stage2", "Finish", XrmEnum.StageStatus.Active, XrmEnum.StageCategory.Identify, [new xrmMock.StepMock("Stage2Step1", "abc_all", true)]);
            var process1Control = new xrmMock.ProcessControlMock("expanded", new xrmMock.UiCanGetVisibleElementMock(true), null);
            var process1 = new xrmMock.ProcessMock({ id: "Process_1", name: "PROCESS 1", rendered: true, stages: new xrmMock.ItemCollectionMock([stage1, stage2]) });
            var process = new xrmMock.ProcessManagerMock([process1]);
            var ui = new xrmMock.UiMock({
                process: process1Control
            });
            xrmMock.XrmMockGenerator.initialise({ process: process, ui: ui });
            var executionContext = xrmMock.XrmMockGenerator.formContext;
            var form = new Tomato.FormTest(executionContext);

            expect(() => { form.Process.AddOnPreProcessStatusChange(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Process.RemoveOnPreProcessStatusChange(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Process.AddOnProcessStatusChange(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Process.RemoveOnProcessStatusChange(null) }).toThrow(new Error("remove on process status change not implemented."));
            expect(() => { form.Process.AddOnStageChange(null) }).toThrow(new Error("add on stage change not implemented"));
            expect(() => { form.Process.RemoveOnStageChange(null) }).toThrow(new Error("remove on stage change not implemented"));
            expect(() => { form.Process.AddOnStageSelected(null) }).toThrow(new Error("add on stage selected not implemented"));
            expect(() => { form.Process.RemoveOnStageSelected(null) }).toThrow(new Error("remove on stage selected not implemented"));
            form.Process.EnabledProcesses(function (process) {
                expect(process.length).toBe(1);
            });
            expect(() => { form.Process.MoveNext(null) }).toThrow(new Error("move next not implemented"));
            expect(() => { form.Process.MovePrevious(null) }).toThrow(new Error("move previous not implemented"));
            expect(() => { form.Process.ProcessInstances(null) }).toThrow(new Error("get process instances not implemented."));
            expect(form.Process.SetActiveStage("stage1", null)).toBeUndefined();
            expect(() => { form.Process.SetActiveProcessInstance(null, null) }).toThrow(new Error("set active process instance not implemented."));
            expect(form.Process.SetActiveProcess(null, null)).toBeUndefined();
            expect(() => { form.Process.Reflow(null, null, null) }).toThrow(new Error("Not implemented."));
            expect(form.Process.ActiveProcess.Id).toBe("Process_1");
            expect(form.Process.ActiveProcess.Name).toBe("PROCESS 1");
            expect(form.Process.ActiveProcess.IsRendered).toBeTruthy();
            expect(form.Process.ActiveProcess.Stages.getLength()).toBe(2);
            var s1 = form.Process.ActiveProcess.Stages.get(0);
            form.Process.ActiveProcess.Stages.forEach(function (stage, index) {
                expect(stage).toBeDefined();
            });
            expect(() => { s1.AllowCreateNew(function () { return true; }) }).toThrow(new Error("getNavigationBehavior not implemented"));
            expect(s1.Category).toBe(OptionSet.ProcessCategory.Identify);
            expect(() => { s1.EntityName }).toThrow(new Error("get entity name not implemented"));
            expect(s1.Id).toBe("stage1");
            expect(s1.Name).toBe("Start");
            expect(s1.Status).toBe("active");
            expect(s1.Steps.length).toBe(2);
            var ss1 = s1.Steps[0];
            expect(ss1.Attribute).toBe("abc_all");
            expect(ss1.Name).toBe("Stage1Step1");
            expect(ss1.Required).toBeTruthy();
            expect(() => { ss1.Progress }).toThrow(new Error("getProgress not implemented"));
            expect(() => { ss1.SetProgress(null, null) }).toThrow(new Error("setProgress not implemented"));
            expect(() => { form.Process.ProcessInstances(function (processes) { ; }) }).toThrow(new Error("get process instances not implemented."));
            expect(() => { form.Process.SelectedStage }).toThrow(new Error("get selected not implemented"));
            var activeStage = form.Process.ActiveStage;
            expect(activeStage.Name).toBe("Start");
            expect(form.Process.InstanceId).toBe("Process_1");
            expect(form.Process.InstanceName).toBe("PROCESS 1");
            expect(() => { form.Process.Status }).toThrow(new Error("get status not implemented."));
            expect(() => { form.Process.Status = OptionSet.ProcessStatus.Finished }).toThrow(new Error("set status not implemented."));
            expect(form.Process.DisplayState).toBe(OptionSet.ProcessDisplayState.Expanded);
            form.Process.DisplayState = OptionSet.ProcessDisplayState.Collapsed;
            expect(form.Process.DisplayState).toBe(OptionSet.ProcessDisplayState.Collapsed);
            expect(form.Process.Visible).toBeTruthy();
            expect(() => { form.Process.ActivePath.get(0) }).toThrow(new Error("get active path not implemented"));
        });
    });
});