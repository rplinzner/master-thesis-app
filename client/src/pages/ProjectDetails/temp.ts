export default `
<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" camunda:diagramRelationId="85e78afb-7144-4322-96ad-553ce2d96731">
  <bpmn:process id="Process_d6f738f5-acc3-4a82-9dd0-781ec32a68bb" isExecutable="true">
    <bpmn:laneSet id="LaneSet_1o2ox7o"/>
    <bpmn:task id="Activity_090ruxq" name="Powrót do strony logowania">
      <bpmn:incoming>Flow_0wg719v</bpmn:incoming>
      <bpmn:incoming>Flow_1fwxdqx</bpmn:incoming>
      <bpmn:outgoing>Flow_0ic4064</bpmn:outgoing>
    </bpmn:task>
    <bpmn:exclusiveGateway id="Gateway_0dvm3ye" name="Czy zresetować hasło?">
      <bpmn:incoming>Flow_0k113hm</bpmn:incoming>
      <bpmn:outgoing>Flow_0wg719v</bpmn:outgoing>
      <bpmn:outgoing>Flow_1q8g09c</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:intermediateThrowEvent id="Event_16420ky" name="Komunikat o błędnych danych">
      <bpmn:incoming>Flow_0us0392</bpmn:incoming>
      <bpmn:outgoing>Flow_0k113hm</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_0lujmvz"/>
    </bpmn:intermediateThrowEvent>
    <bpmn:endEvent id="Event_1nj7s1p" name="Klient zalogowany">
      <bpmn:incoming>Flow_06e488i</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:task id="Activity_1ufjyhy" name="Przejdź do strony głównej">
      <bpmn:incoming>Flow_0kvb4s5</bpmn:incoming>
      <bpmn:outgoing>Flow_06e488i</bpmn:outgoing>
    </bpmn:task>
    <bpmn:exclusiveGateway id="Gateway_1i4jk01" name="Czy wprowadzone dane są poprawne?">
      <bpmn:incoming>Flow_0osg45g</bpmn:incoming>
      <bpmn:outgoing>Flow_0kvb4s5</bpmn:outgoing>
      <bpmn:outgoing>Flow_0us0392</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:task id="Activity_1f2mrg6" name="Autoryzacja">
      <bpmn:incoming>Flow_09e84zs</bpmn:incoming>
      <bpmn:outgoing>Flow_0osg45g</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Activity_0hrp6dd" name="Wypełnij formularz logowania">
      <bpmn:incoming>Flow_0zjich7</bpmn:incoming>
      <bpmn:incoming>Flow_0ic4064</bpmn:incoming>
      <bpmn:outgoing>Flow_09e84zs</bpmn:outgoing>
    </bpmn:task>
    <bpmn:startEvent id="Event_0fprfnv" name="Strona&#10;logowania">
      <bpmn:outgoing>Flow_0zjich7</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_0zjich7" sourceRef="Event_0fprfnv" targetRef="Activity_0hrp6dd"/>
    <bpmn:sequenceFlow id="Flow_09e84zs" sourceRef="Activity_0hrp6dd" targetRef="Activity_1f2mrg6"/>
    <bpmn:sequenceFlow id="Flow_0osg45g" sourceRef="Activity_1f2mrg6" targetRef="Gateway_1i4jk01"/>
    <bpmn:sequenceFlow id="Flow_0kvb4s5" name="Tak" sourceRef="Gateway_1i4jk01" targetRef="Activity_1ufjyhy"/>
    <bpmn:sequenceFlow id="Flow_06e488i" sourceRef="Activity_1ufjyhy" targetRef="Event_1nj7s1p"/>
    <bpmn:sequenceFlow id="Flow_0us0392" sourceRef="Gateway_1i4jk01" targetRef="Event_16420ky"/>
    <bpmn:sequenceFlow id="Flow_0k113hm" sourceRef="Event_16420ky" targetRef="Gateway_0dvm3ye"/>
    <bpmn:sequenceFlow id="Flow_0ic4064" sourceRef="Activity_090ruxq" targetRef="Activity_0hrp6dd"/>
    <bpmn:sequenceFlow id="Flow_0wg719v" name="Nie" sourceRef="Gateway_0dvm3ye" targetRef="Activity_090ruxq"/>
    <bpmn:sequenceFlow id="Flow_1q8g09c" name="Tak" sourceRef="Gateway_0dvm3ye" targetRef="Activity_001lb9y"/>
    <bpmn:subProcess id="Activity_001lb9y">
      <bpmn:incoming>Flow_1q8g09c</bpmn:incoming>
      <bpmn:outgoing>Flow_1fwxdqx</bpmn:outgoing>
      <bpmn:startEvent id="Event_1jtxl6y">
        <bpmn:outgoing>Flow_0sby4rz</bpmn:outgoing>
      </bpmn:startEvent>
      <bpmn:task id="Activity_0buyvri" name="Wprowadź adres e-mail">
        <bpmn:incoming>Flow_0sby4rz</bpmn:incoming>
        <bpmn:outgoing>Flow_0favtun</bpmn:outgoing>
      </bpmn:task>
      <bpmn:sequenceFlow id="Flow_0sby4rz" sourceRef="Event_1jtxl6y" targetRef="Activity_0buyvri"/>
      <bpmn:sequenceFlow id="Flow_0favtun" sourceRef="Activity_0buyvri" targetRef="Event_1pjqps3"/>
      <bpmn:endEvent id="Event_1pjqps3" name="Wyślj link do resetowania hasła">
        <bpmn:incoming>Flow_0favtun</bpmn:incoming>
        <bpmn:messageEventDefinition id="MessageEventDefinition_11vwnmx"/>
      </bpmn:endEvent>
    </bpmn:subProcess>
    <bpmn:sequenceFlow id="Flow_1fwxdqx" sourceRef="Activity_001lb9y" targetRef="Activity_090ruxq"/>
    <bpmn:textAnnotation id="TextAnnotation_0dhb3g4">
      <bpmn:text>Wymagane dane:
login
hasło</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Association_08vrjll" sourceRef="Activity_0hrp6dd" targetRef="TextAnnotation_0dhb3g4"/>
    <bpmn:textAnnotation id="TextAnnotation_0dbxnj8">
      <bpmn:text>Podproces "Wysłanie linku do resetowania hasła"</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Association_02i5ucw" sourceRef="Activity_001lb9y" targetRef="TextAnnotation_0dbxnj8"/>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_d6f738f5-acc3-4a82-9dd0-781ec32a68bb">
      <bpmndi:BPMNEdge id="Flow_1fwxdqx_di" bpmnElement="Flow_1fwxdqx">
        <di:waypoint x="550" y="320"/>
        <di:waypoint x="550" y="410"/>
        <di:waypoint x="350" y="410"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1q8g09c_di" bpmnElement="Flow_1q8g09c">
        <di:waypoint x="325" y="250"/>
        <di:waypoint x="380" y="250"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds x="344" y="232" width="17" height="14"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0wg719v_di" bpmnElement="Flow_0wg719v">
        <di:waypoint x="300" y="275"/>
        <di:waypoint x="300" y="370"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds x="307" y="307" width="17" height="14"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ic4064_di" bpmnElement="Flow_0ic4064">
        <di:waypoint x="250" y="410"/>
        <di:waypoint x="-240" y="410"/>
        <di:waypoint x="-240" y="290"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0k113hm_di" bpmnElement="Flow_0k113hm">
        <di:waypoint x="188" y="250"/>
        <di:waypoint x="275" y="250"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0us0392_di" bpmnElement="Flow_0us0392">
        <di:waypoint x="85" y="250"/>
        <di:waypoint x="152" y="250"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_06e488i_di" bpmnElement="Flow_06e488i">
        <di:waypoint x="230" y="120"/>
        <di:waypoint x="282" y="120"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0kvb4s5_di" bpmnElement="Flow_0kvb4s5">
        <di:waypoint x="60" y="225"/>
        <di:waypoint x="60" y="120"/>
        <di:waypoint x="130" y="120"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds x="67" y="173" width="17" height="14"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0osg45g_di" bpmnElement="Flow_0osg45g">
        <di:waypoint x="-30" y="250"/>
        <di:waypoint x="35" y="250"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_09e84zs_di" bpmnElement="Flow_09e84zs">
        <di:waypoint x="-190" y="250"/>
        <di:waypoint x="-130" y="250"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0zjich7_di" bpmnElement="Flow_0zjich7">
        <di:waypoint x="-322" y="250"/>
        <di:waypoint x="-290" y="250"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Activity_090ruxq_di" bpmnElement="Activity_090ruxq">
        <dc:Bounds x="250" y="370" width="100" height="80"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0dvm3ye_di" bpmnElement="Gateway_0dvm3ye" isMarkerVisible="true">
        <dc:Bounds x="275" y="225" width="50" height="50"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds x="260" y="188" width="79" height="27"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0bvv4os_di" bpmnElement="Event_16420ky">
        <dc:Bounds x="152" y="232" width="36" height="36"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds x="129" y="275" width="83" height="27"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1nj7s1p_di" bpmnElement="Event_1nj7s1p">
        <dc:Bounds x="282" y="102" width="36" height="36"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds x="255" y="145" width="90" height="14"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1ufjyhy_di" bpmnElement="Activity_1ufjyhy">
        <dc:Bounds x="130" y="80" width="100" height="80"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1i4jk01_di" bpmnElement="Gateway_1i4jk01" isMarkerVisible="true">
        <dc:Bounds x="35" y="225" width="50" height="50"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds x="15" y="282" width="90" height="40"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1f2mrg6_di" bpmnElement="Activity_1f2mrg6">
        <dc:Bounds x="-130" y="210" width="100" height="80"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0hrp6dd_di" bpmnElement="Activity_0hrp6dd">
        <dc:Bounds x="-290" y="210" width="100" height="80"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0fprfnv_di" bpmnElement="Event_0fprfnv">
        <dc:Bounds x="-358" y="232" width="36" height="36"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds x="-365" y="275" width="50" height="27"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1v09rsa_di" bpmnElement="Activity_001lb9y" isExpanded="true">
        <dc:Bounds x="380" y="190" width="290" height="130"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0favtun_di" bpmnElement="Flow_0favtun">
        <di:waypoint x="560" y="250"/>
        <di:waypoint x="602" y="250"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0sby4rz_di" bpmnElement="Flow_0sby4rz">
        <di:waypoint x="438" y="250"/>
        <di:waypoint x="460" y="250"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Event_1jtxl6y_di" bpmnElement="Event_1jtxl6y">
        <dc:Bounds x="402" y="232" width="36" height="36"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0buyvri_di" bpmnElement="Activity_0buyvri">
        <dc:Bounds x="460" y="210" width="100" height="80"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_047gxj3_di" bpmnElement="Event_1pjqps3">
        <dc:Bounds x="602" y="232" width="36" height="36"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds x="576" y="275" width="89" height="27"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_0dhb3g4_di" bpmnElement="TextAnnotation_0dhb3g4">
        <dc:Bounds x="-220" y="110" width="145" height="55"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_0dbxnj8_di" bpmnElement="TextAnnotation_0dbxnj8">
        <dc:Bounds x="510" y="110" width="190" height="48"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_08vrjll_di" bpmnElement="Association_08vrjll">
        <di:waypoint x="-218" y="210"/>
        <di:waypoint x="-192" y="165"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Association_02i5ucw_di" bpmnElement="Association_02i5ucw">
        <di:waypoint x="555" y="190"/>
        <di:waypoint x="557" y="158"/>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`;