export default `
<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" camunda:diagramRelationId="c16f516d-ea8a-40ba-9c6d-782c070d7636">
  <bpmn:collaboration id="Collaboration_17o6fz6">
    <bpmn:documentation>asdfs
</bpmn:documentation>
    <bpmn:participant id="Participant_158mi3f" name="Repozytorium" processRef="Process_03jvtfo"/>
    <bpmn:participant id="Participant_0mx7aq5" name="Serwis" processRef="Process_0c7eijy">
      <bpmn:documentation>font-weight: bold;
</bpmn:documentation>
    </bpmn:participant>
    <bpmn:participant id="Participant_080iat5" name="Kontroler" processRef="Process_195gvi8"/>
  </bpmn:collaboration>
  <bpmn:process id="Process_03jvtfo" isExecutable="false"/>
  <bpmn:process id="Process_0c7eijy" isExecutable="false"/>
  <bpmn:process id="Process_195gvi8" isExecutable="false">
    <bpmn:startEvent id="Event_13k7oot" name="Dane&#10;użytkownika">
      <bpmn:outgoing>Flow_1cc18xf</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_1vxrroq"/>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_1cc18xf" sourceRef="Event_13k7oot" targetRef="Activity_1p3np0i"/>
    <bpmn:task id="Activity_1p3np0i" name="Sprawdź poprawność danych">
      <bpmn:incoming>Flow_1cc18xf</bpmn:incoming>
    </bpmn:task>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_17o6fz6">
      <bpmndi:BPMNShape id="Participant_158mi3f_di" bpmnElement="Participant_158mi3f" isHorizontal="true">
        <dc:Bounds x="310" y="10" width="680" height="190"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Participant_0mx7aq5_di" bpmnElement="Participant_0mx7aq5" isHorizontal="true">
        <dc:Bounds x="310" y="240" width="680" height="190"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Participant_080iat5_di" bpmnElement="Participant_080iat5" isHorizontal="true">
        <dc:Bounds x="310" y="460" width="680" height="190"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1cc18xf_di" bpmnElement="Flow_1cc18xf">
        <di:waypoint x="398" y="560"/>
        <di:waypoint x="430" y="560"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Event_11p3ebd_di" bpmnElement="Event_13k7oot">
        <dc:Bounds x="362" y="542" width="36" height="36"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds x="350" y="585" width="60" height="27"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1p3np0i_di" bpmnElement="Activity_1p3np0i">
        <dc:Bounds x="430" y="520" width="100" height="80"/>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`;