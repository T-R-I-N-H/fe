import type { Diagram } from '@/types/diagram';

export const SAMPLE_DIAGRAMS: Diagram[] = [
    {
        diagram_id: '1',
        diagram_data: `<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:signavio="http://www.signavio.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" exporter="Signavio Process Editor, http://www.signavio.com" exporterVersion="9.3.2" expressionLanguage="http://www.w3.org/TR/XPath" id="sid-83ed6021-15b8-42df-b971-a63f5e32fb4f" targetNamespace="http://www.signavio.com" typeLanguage="http://www.w3.org/2001/XMLSchema" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
   <collaboration id="sid-403fa843-143a-4d5e-8c39-59f628e3aa39">
      <extensionElements>
         <signavio:signavioDiagramMetaData metaKey="revisionid" metaValue="eec0098d1c324c5295a695320b4ab1a1"/>
      </extensionElements>
      <participant id="sid-40FD4BAF-A217-4AEE-8B75-7F49EC865A3C" name="Dispatch of Goods" processRef="sid-23D3B118-620B-462C-87E7-3FCA5A31C116">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
      </participant>
   </collaboration>
   <process id="sid-23D3B118-620B-462C-87E7-3FCA5A31C116" isClosed="false" isExecutable="false" name="Dispatch of Goods" processType="None">
      <extensionElements/>
      <laneSet id="sid-5a00a007-a3c0-420c-b67c-b2e3c2d43c83">
         <lane id="sid-1E36B82C-9733-4BE3-B057-853B9F413E6B" name="Secretary">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8</flowNodeRef>
            <flowNodeRef>sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E</flowNodeRef>
            <flowNodeRef>sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58</flowNodeRef>
            <flowNodeRef>sid-327EC495-8914-4A21-ADAC-F1FAD7887092</flowNodeRef>
            <flowNodeRef>sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4</flowNodeRef>
            <flowNodeRef>sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1</flowNodeRef>
            <flowNodeRef>sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37</flowNodeRef>
            <flowNodeRef>sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109</flowNodeRef>
            <flowNodeRef>sid-A1408C66-4C19-4A37-8540-567104D2E130</flowNodeRef>
            <flowNodeRef>sid-9472092E-BBE1-40FF-9FDB-045AF16A4809</flowNodeRef>
            <flowNodeRef>sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18</flowNodeRef>
            <flowNodeRef>sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C</flowNodeRef>
            <flowNodeRef>sid-205147B9-D6C3-47DA-9FC4-5105BA84D067</flowNodeRef>
            <flowNodeRef>sid-A6569A56-BF09-40A5-86E5-7B46BC22C490</flowNodeRef>
            <flowNodeRef>sid-71B26009-FA81-45D7-BDB5-866130BB228B</flowNodeRef>
         </lane>
         <lane id="sid-1763AF19-B6F2-43F4-B4F3-8040026139C6" name="Vendor 1">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8</flowNodeRef>
         </lane>
         <lane id="sid-E41ED7C8-E7B3-4718-80F7-9D42299FA03A" name="Vendor 2">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-A464927F-E7DD-4477-AD50-9FFEA044C66E</flowNodeRef>
         </lane>
         <lane id="sid-DAC68216-49C5-4E69-98B8-79E8643038B2" name="Vendor 3">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-525E5320-6F72-493B-925C-8E48F82370D0</flowNodeRef>
         </lane>
         <lane id="sid-7353FC4B-D962-4807-A7E7-17C2B089D07A" name="Warehousemen">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-59E4ED9D-9819-4C53-A995-1DD50A733181</flowNodeRef>
         </lane>
         <lane id="sid-BF81398A-363B-4827-9EEF-A04FC0EF5FCA" name="Logistics department">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548</flowNodeRef>
            <flowNodeRef>sid-B01A1ADA-82D5-4657-94EC-C6A222C31428</flowNodeRef>
         </lane>
      </laneSet>
      <startEvent id="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" isInterrupting="true" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <outgoing>sid-E180DA97-E03D-41B1-825C-5640B1343ABD</outgoing>
         <conditionalEventDefinition id="sid-298dc972-8dad-4ae4-9ac7-684120c49d95">
            <condition id="sid-a3922006-87d7-45e3-8035-931e5106b16f" xsi:type="tFormalExpression"/>
         </conditionalEventDefinition>
      </startEvent>
      <task completionQuantity="1" id="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E" isForCompensation="false" name="Determine Size" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-E180DA97-E03D-41B1-825C-5640B1343ABD</incoming>
         <outgoing>sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34</outgoing>
      </task>
      <exclusiveGateway gatewayDirection="Diverging" id="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34</incoming>
         <outgoing>sid-B998E856-3794-4904-A0F3-EBA4B44F00F5</outgoing>
         <outgoing>sid-F9D2304D-027C-473B-9629-EE534F7CB963</outgoing>
      </exclusiveGateway>
      <task completionQuantity="1" id="sid-327EC495-8914-4A21-ADAC-F1FAD7887092" isForCompensation="false" name="Normal post shipment" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-B998E856-3794-4904-A0F3-EBA4B44F00F5</incoming>
         <outgoing>sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD</outgoing>
      </task>
      <task completionQuantity="1" id="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4" isForCompensation="false" name="Special Shipping" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-F9D2304D-027C-473B-9629-EE534F7CB963</incoming>
         <outgoing>sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978</outgoing>
      </task>
      <task completionQuantity="1" id="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1" isForCompensation="false" name="Request Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978</incoming>
         <outgoing>sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3</outgoing>
      </task>
      <parallelGateway gatewayDirection="Diverging" id="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3</incoming>
         <outgoing>sid-56F4AA87-A49C-480B-B396-5A3F402E35ED</outgoing>
         <outgoing>sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2</outgoing>
      </parallelGateway>
      <parallelGateway gatewayDirection="Converging" id="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455</incoming>
         <incoming>sid-5A4AAD89-453E-4AA7-A286-83654280D5E7</incoming>
         <incoming>sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0</incoming>
         <outgoing>sid-C491E07D-4404-4A31-9739-640F2FDC1AE6</outgoing>
      </parallelGateway>
      <task completionQuantity="1" id="sid-A1408C66-4C19-4A37-8540-567104D2E130" isForCompensation="false" name="Select Vendor" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-C491E07D-4404-4A31-9739-640F2FDC1AE6</incoming>
         <outgoing>sid-DE169EF5-BBB8-4FCD-B391-2B260C462507</outgoing>
      </task>
      <task completionQuantity="1" id="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809" isForCompensation="false" name="Create Package Label" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD</incoming>
         <outgoing>sid-3ABD36F7-7533-4333-8FFF-2725E5856D10</outgoing>
      </task>
      <exclusiveGateway gatewayDirection="Diverging" id="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-3ABD36F7-7533-4333-8FFF-2725E5856D10</incoming>
         <outgoing>sid-3D647358-EF55-4CDA-BBDA-163463EA482E</outgoing>
         <outgoing>sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743</outgoing>
      </exclusiveGateway>
      <endEvent id="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743</incoming>
      </endEvent>
      <parallelGateway gatewayDirection="Diverging" id="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2</incoming>
         <outgoing>sid-13628390-9255-4FBD-BD5C-4F8B2E29197A</outgoing>
         <outgoing>sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7</outgoing>
         <outgoing>sid-EC39B233-C77C-4B84-81A8-F43E9D138970</outgoing>
      </parallelGateway>
      <parallelGateway gatewayDirection="Converging" id="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC</incoming>
         <incoming>sid-DE169EF5-BBB8-4FCD-B391-2B260C462507</incoming>
         <outgoing>sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE</outgoing>
      </parallelGateway>
      <endEvent id="sid-71B26009-FA81-45D7-BDB5-866130BB228B" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE</incoming>
      </endEvent>
      <task completionQuantity="1" id="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8" isForCompensation="false" name="Submit Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-EC39B233-C77C-4B84-81A8-F43E9D138970</incoming>
         <outgoing>sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0</outgoing>
      </task>
      <task completionQuantity="1" id="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E" isForCompensation="false" name="Submit Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7</incoming>
         <outgoing>sid-5A4AAD89-453E-4AA7-A286-83654280D5E7</outgoing>
      </task>
      <task completionQuantity="1" id="sid-525E5320-6F72-493B-925C-8E48F82370D0" isForCompensation="false" name="Submit Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-13628390-9255-4FBD-BD5C-4F8B2E29197A</incoming>
         <outgoing>sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455</outgoing>
      </task>
      <task completionQuantity="1" id="sid-59E4ED9D-9819-4C53-A995-1DD50A733181" isForCompensation="false" name="Package Goods" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-56F4AA87-A49C-480B-B396-5A3F402E35ED</incoming>
         <outgoing>sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC</outgoing>
      </task>
      <task completionQuantity="1" id="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548" isForCompensation="false" name="Purchase Insurance" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-3D647358-EF55-4CDA-BBDA-163463EA482E</incoming>
         <outgoing>sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9</outgoing>
      </task>
      <endEvent id="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9</incoming>
      </endEvent>
      <sequenceFlow id="sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34" name="" sourceRef="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E" targetRef="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58"/>
      <sequenceFlow id="sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978" name="" sourceRef="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4" targetRef="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1"/>
      <sequenceFlow id="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5" name="" sourceRef="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" targetRef="sid-327EC495-8914-4A21-ADAC-F1FAD7887092"/>
      <sequenceFlow id="sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3" name="" sourceRef="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1" targetRef="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37"/>
      <sequenceFlow id="sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD" name="" sourceRef="sid-327EC495-8914-4A21-ADAC-F1FAD7887092" targetRef="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809"/>
      <sequenceFlow id="sid-3ABD36F7-7533-4333-8FFF-2725E5856D10" name="" sourceRef="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809" targetRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18"/>
      <sequenceFlow id="sid-3D647358-EF55-4CDA-BBDA-163463EA482E" name="" sourceRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" targetRef="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548"/>
      <sequenceFlow id="sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9" name="" sourceRef="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548" targetRef="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428"/>
      <sequenceFlow id="sid-56F4AA87-A49C-480B-B396-5A3F402E35ED" name="" sourceRef="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" targetRef="sid-59E4ED9D-9819-4C53-A995-1DD50A733181"/>
      <sequenceFlow id="sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743" name="" sourceRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" targetRef="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C"/>
      <sequenceFlow id="sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2" name="" sourceRef="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" targetRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067"/>
      <sequenceFlow id="sid-C491E07D-4404-4A31-9739-640F2FDC1AE6" name="" sourceRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109" targetRef="sid-A1408C66-4C19-4A37-8540-567104D2E130"/>
      <sequenceFlow id="sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC" name="" sourceRef="sid-59E4ED9D-9819-4C53-A995-1DD50A733181" targetRef="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490"/>
      <sequenceFlow id="sid-DE169EF5-BBB8-4FCD-B391-2B260C462507" name="" sourceRef="sid-A1408C66-4C19-4A37-8540-567104D2E130" targetRef="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490"/>
      <sequenceFlow id="sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE" name="" sourceRef="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490" targetRef="sid-71B26009-FA81-45D7-BDB5-866130BB228B"/>
      <sequenceFlow id="sid-13628390-9255-4FBD-BD5C-4F8B2E29197A" name="" sourceRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" targetRef="sid-525E5320-6F72-493B-925C-8E48F82370D0"/>
      <sequenceFlow id="sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7" name="" sourceRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" targetRef="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E"/>
      <sequenceFlow id="sid-EC39B233-C77C-4B84-81A8-F43E9D138970" name="" sourceRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" targetRef="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8"/>
      <sequenceFlow id="sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455" name="" sourceRef="sid-525E5320-6F72-493B-925C-8E48F82370D0" targetRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109"/>
      <sequenceFlow id="sid-5A4AAD89-453E-4AA7-A286-83654280D5E7" name="" sourceRef="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E" targetRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109"/>
      <sequenceFlow id="sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0" name="" sourceRef="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8" targetRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109"/>
      <sequenceFlow id="sid-F9D2304D-027C-473B-9629-EE534F7CB963" name="" sourceRef="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" targetRef="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4"/>
      <sequenceFlow id="sid-E180DA97-E03D-41B1-825C-5640B1343ABD" name="" sourceRef="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" targetRef="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E"/>
      <association associationDirection="None" id="sid-21E4C5C8-82A4-4952-8C9D-70541060233F" sourceRef="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" targetRef="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A"/>
      <association associationDirection="None" id="sid-14AF078E-573F-408A-9626-5AF18B0E07E7" sourceRef="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5" targetRef="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25"/>
      <association associationDirection="None" id="sid-4320B584-2E94-4204-86BC-1BD71DC46E9C" sourceRef="sid-F9D2304D-027C-473B-9629-EE534F7CB963" targetRef="sid-86418154-10CC-467E-8430-C42FD1CB1D3B"/>
      <association associationDirection="None" id="sid-F9C85FB5-89D7-460C-A3E0-382C8372B807" sourceRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" targetRef="sid-B151BF0C-60DF-4355-A78A-FF77621203FF"/>
      <textAnnotation id="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A" textFormat="text/plain">
         <text>Goods shall be shipped</text>
      </textAnnotation>
      <textAnnotation id="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25" textFormat="text/plain">
         <text>Small Amounts</text>
      </textAnnotation>
      <textAnnotation id="sid-86418154-10CC-467E-8430-C42FD1CB1D3B" textFormat="text/plain">
         <text>Large Amounts</text>
      </textAnnotation>
      <textAnnotation id="sid-B151BF0C-60DF-4355-A78A-FF77621203FF" textFormat="text/plain">
         <text>If Insurance is required</text>
      </textAnnotation>
   </process>
   <process id="sid-db34fc7b-c49c-4542-9048-fcc0313c0cda" isClosed="false" isExecutable="false" processType="None">
      <task completionQuantity="1" id="sid-D2A83D67-359A-4C2D-A4A5-EE6F61932675" isForCompensation="false" name="" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
      </task>
   </process>
   <bpmndi:BPMNDiagram id="sid-6cd7a277-2063-47f4-a44d-2c3a88e85726">
      <bpmndi:BPMNPlane bpmnElement="sid-403fa843-143a-4d5e-8c39-59f628e3aa39" id="sid-9bb4fada-88a8-43b1-954b-b51ea8eb9e4e">
         <bpmndi:BPMNShape bpmnElement="sid-40FD4BAF-A217-4AEE-8B75-7F49EC865A3C" id="sid-40FD4BAF-A217-4AEE-8B75-7F49EC865A3C_gui" isHorizontal="true">
            <omgdc:Bounds height="1234.0" width="1697.0" x="30.0" y="175.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="101.05714416503906" width="12.000000000000014" x="34.99999999999999" y="741.4714279174805"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1E36B82C-9733-4BE3-B057-853B9F413E6B" id="sid-1E36B82C-9733-4BE3-B057-853B9F413E6B_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="569.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="51.68571472167969" width="12.000000000000014" x="65.0" y="641.6571426391602"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1763AF19-B6F2-43F4-B4F3-8040026139C6" id="sid-1763AF19-B6F2-43F4-B4F3-8040026139C6_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="766.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="50.14285659790039" width="12.000000000000014" x="65.0" y="839.4285717010498"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-E41ED7C8-E7B3-4718-80F7-9D42299FA03A" id="sid-E41ED7C8-E7B3-4718-80F7-9D42299FA03A_gui" isHorizontal="true">
            <omgdc:Bounds height="214.0" width="1667.0" x="60.0" y="963.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="50.14285659790039" width="12.000000000000014" x="65.0" y="1044.9285717010498"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-DAC68216-49C5-4E69-98B8-79E8643038B2" id="sid-DAC68216-49C5-4E69-98B8-79E8643038B2_gui" isHorizontal="true">
            <omgdc:Bounds height="232.0" width="1667.0" x="60.0" y="1177.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="50.14285659790039" width="12.000000000000014" x="65.0" y="1267.9285717010498"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-7353FC4B-D962-4807-A7E7-17C2B089D07A" id="sid-7353FC4B-D962-4807-A7E7-17C2B089D07A_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="372.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="84.85713958740234" width="12.000000000000014" x="65.0" y="428.0714302062988"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-BF81398A-363B-4827-9EEF-A04FC0EF5FCA" id="sid-BF81398A-363B-4827-9EEF-A04FC0EF5FCA_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="175.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="114.17142486572266" width="12.000000000000014" x="64.99999999999999" y="216.41428756713867"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" id="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="90.0" y="653.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E" id="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="165.0" y="628.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="81.77142333984375" x="174.11428833007812" y="660.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" id="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58_gui" isMarkerVisible="true">
            <omgdc:Bounds height="40.0" width="40.0" x="315.0" y="648.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-327EC495-8914-4A21-ADAC-F1FAD7887092" id="sid-327EC495-8914-4A21-ADAC-F1FAD7887092_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="525.0" y="584.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="24.0" width="66.34285736083984" x="541.8285713195801" y="610.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4" id="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="525.0" y="684.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="87.94285583496094" x="531.0285720825195" y="716.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1" id="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="675.0" y="684.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="75.5999984741211" x="687.2000007629395" y="716.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" id="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="894.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109" id="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="1245.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A1408C66-4C19-4A37-8540-567104D2E130" id="sid-A1408C66-4C19-4A37-8540-567104D2E130_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1320.0" y="684.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="75.5999984741211" x="1332.2000007629395" y="716.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809" id="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="675.0" y="584.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="24.0" width="82.5428466796875" x="683.7285766601562" y="610.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" id="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18_gui" isMarkerVisible="true">
            <omgdc:Bounds height="40.0" width="40.0" x="795.0" y="604.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C" id="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="900.0" y="610.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" id="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="1005.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490" id="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="1530.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-71B26009-FA81-45D7-BDB5-866130BB228B" id="sid-71B26009-FA81-45D7-BDB5-866130BB228B_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="1635.0" y="710.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8" id="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1110.0" y="825.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="69.42857360839844" x="1125.2857131958008" y="857.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E" id="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1110.0" y="1030.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="69.42857360839844" x="1125.2857131958008" y="1062.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-525E5320-6F72-493B-925C-8E48F82370D0" id="sid-525E5320-6F72-493B-925C-8E48F82370D0_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1110.0" y="1244.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="69.42857360839844" x="1125.2857131958008" y="1276.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-59E4ED9D-9819-4C53-A995-1DD50A733181" id="sid-59E4ED9D-9819-4C53-A995-1DD50A733181_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1111.2519166377645" y="397.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="82.5428466796875" x="1119.9804932979207" y="429.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548" id="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="765.0" y="234.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="24.0" width="53.22857666015625" x="788.3857116699219" y="260.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428" id="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="1011.0" y="260.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A" id="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="90.0" y="573.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="24.0" width="80.22856903076172" x="94.0" y="583.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25" id="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="345.0" y="573.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="12.0" width="81.77143096923828" x="349.0" y="589.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-86418154-10CC-467E-8430-C42FD1CB1D3B" id="sid-86418154-10CC-467E-8430-C42FD1CB1D3B_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="345.0" y="720.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="12.0" width="83.31428527832031" x="349.0" y="736.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-B151BF0C-60DF-4355-A78A-FF77621203FF" id="sid-B151BF0C-60DF-4355-A78A-FF77621203FF_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="765.0" y="643.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="24.0" width="77.14286041259766" x="769.0" y="653.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-D2A83D67-359A-4C2D-A4A5-EE6F61932675" id="sid-D2A83D67-359A-4C2D-A4A5-EE6F61932675_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="195.0" y="-776.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNEdge bpmnElement="sid-21E4C5C8-82A4-4952-8C9D-70541060233F" id="sid-21E4C5C8-82A4-4952-8C9D-70541060233F_gui">
            <omgdi:waypoint x="102.04225352112677" y="653.0"/>
            <omgdi:waypoint x="96.12676056338029" y="623.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34" id="sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34_gui">
            <omgdi:waypoint x="265.0" y="668.207468879668"/>
            <omgdi:waypoint x="315.0" y="668.4149377593361"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-14AF078E-573F-408A-9626-5AF18B0E07E7" id="sid-14AF078E-573F-408A-9626-5AF18B0E07E7_gui">
            <omgdi:waypoint x="362.76487523992324" y="624.0"/>
            <omgdi:waypoint x="362.1439539347409" y="623.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-4320B584-2E94-4204-86BC-1BD71DC46E9C" id="sid-4320B584-2E94-4204-86BC-1BD71DC46E9C_gui">
            <omgdi:waypoint x="367.6663240131579" y="724.0"/>
            <omgdi:waypoint x="346.0" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978" id="sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978_gui">
            <omgdi:waypoint x="625.0" y="724.0"/>
            <omgdi:waypoint x="675.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5" id="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5_gui">
            <omgdi:waypoint x="335.5" y="648.0"/>
            <omgdi:waypoint x="335.5" y="624.0"/>
            <omgdi:waypoint x="525.0" y="624.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3" id="sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3_gui">
            <omgdi:waypoint x="775.0" y="724.0"/>
            <omgdi:waypoint x="894.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD" id="sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD_gui">
            <omgdi:waypoint x="625.0" y="624.0"/>
            <omgdi:waypoint x="675.0" y="624.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-3ABD36F7-7533-4333-8FFF-2725E5856D10" id="sid-3ABD36F7-7533-4333-8FFF-2725E5856D10_gui">
            <omgdi:waypoint x="775.0" y="624.2762430939226"/>
            <omgdi:waypoint x="795.0" y="624.3867403314918"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-3D647358-EF55-4CDA-BBDA-163463EA482E" id="sid-3D647358-EF55-4CDA-BBDA-163463EA482E_gui">
            <omgdi:waypoint x="815.4707560627675" y="604.0"/>
            <omgdi:waypoint x="815.0570613409415" y="314.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-F9C85FB5-89D7-460C-A3E0-382C8372B807" id="sid-F9C85FB5-89D7-460C-A3E0-382C8372B807_gui">
            <omgdi:waypoint x="795.0" y="642.10101010101"/>
            <omgdi:waypoint x="793.9529411764705" y="643.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9" id="sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9_gui">
            <omgdi:waypoint x="865.0" y="274.0"/>
            <omgdi:waypoint x="1011.0" y="274.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-56F4AA87-A49C-480B-B396-5A3F402E35ED" id="sid-56F4AA87-A49C-480B-B396-5A3F402E35ED_gui">
            <omgdi:waypoint x="914.5" y="704.0"/>
            <omgdi:waypoint x="914.5" y="670.5"/>
            <omgdi:waypoint x="1161.2519166377645" y="670.5"/>
            <omgdi:waypoint x="1161.2519166377645" y="477.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743" id="sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743_gui">
            <omgdi:waypoint x="835.0" y="624.4010152284264"/>
            <omgdi:waypoint x="900.0" y="624.0710659898477"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2" id="sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2_gui">
            <omgdi:waypoint x="934.0" y="724.5"/>
            <omgdi:waypoint x="1005.0" y="724.5"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-C491E07D-4404-4A31-9739-640F2FDC1AE6" id="sid-C491E07D-4404-4A31-9739-640F2FDC1AE6_gui">
            <omgdi:waypoint x="1285.0" y="724.0"/>
            <omgdi:waypoint x="1320.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC" id="sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC_gui">
            <omgdi:waypoint x="1211.2519166377645" y="437.0"/>
            <omgdi:waypoint x="1550.5" y="437.0"/>
            <omgdi:waypoint x="1550.5" y="704.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-DE169EF5-BBB8-4FCD-B391-2B260C462507" id="sid-DE169EF5-BBB8-4FCD-B391-2B260C462507_gui">
            <omgdi:waypoint x="1420.0" y="724.0"/>
            <omgdi:waypoint x="1530.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE" id="sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE_gui">
            <omgdi:waypoint x="1570.0" y="724.4010152284264"/>
            <omgdi:waypoint x="1635.0" y="724.0710659898477"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-13628390-9255-4FBD-BD5C-4F8B2E29197A" id="sid-13628390-9255-4FBD-BD5C-4F8B2E29197A_gui">
            <omgdi:waypoint x="1025.5" y="744.0"/>
            <omgdi:waypoint x="1025.5" y="1284.0"/>
            <omgdi:waypoint x="1110.0" y="1284.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7" id="sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7_gui">
            <omgdi:waypoint x="1026.5" y="744.0"/>
            <omgdi:waypoint x="1026.5" y="1070.0"/>
            <omgdi:waypoint x="1110.0" y="1070.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-EC39B233-C77C-4B84-81A8-F43E9D138970" id="sid-EC39B233-C77C-4B84-81A8-F43E9D138970_gui">
            <omgdi:waypoint x="1025.5" y="744.0"/>
            <omgdi:waypoint x="1025.5" y="865.0"/>
            <omgdi:waypoint x="1110.0" y="865.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455" id="sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455_gui">
            <omgdi:waypoint x="1210.0" y="1284.0"/>
            <omgdi:waypoint x="1266.0" y="1284.0"/>
            <omgdi:waypoint x="1266.0" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-5A4AAD89-453E-4AA7-A286-83654280D5E7" id="sid-5A4AAD89-453E-4AA7-A286-83654280D5E7_gui">
            <omgdi:waypoint x="1210.0" y="1070.0"/>
            <omgdi:waypoint x="1264.0" y="1070.0"/>
            <omgdi:waypoint x="1264.0" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0" id="sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0_gui">
            <omgdi:waypoint x="1210.0" y="865.0"/>
            <omgdi:waypoint x="1265.5" y="865.0"/>
            <omgdi:waypoint x="1265.5" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-F9D2304D-027C-473B-9629-EE534F7CB963" id="sid-F9D2304D-027C-473B-9629-EE534F7CB963_gui">
            <omgdi:waypoint x="335.5" y="688.0"/>
            <omgdi:waypoint x="335.5" y="724.0"/>
            <omgdi:waypoint x="525.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-E180DA97-E03D-41B1-825C-5640B1343ABD" id="sid-E180DA97-E03D-41B1-825C-5640B1343ABD_gui">
            <omgdi:waypoint x="120.0" y="666.7511391044501"/>
            <omgdi:waypoint x="165.0" y="666.7511391044501"/>
         </bpmndi:BPMNEdge>
      </bpmndi:BPMNPlane>
      <bpmndi:BPMNLabelStyle id="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
         <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="11.0"/>
      </bpmndi:BPMNLabelStyle>
      <bpmndi:BPMNLabelStyle id="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
         <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="12.0"/>
      </bpmndi:BPMNLabelStyle>
   </bpmndi:BPMNDiagram>
</definitions>`,
        diagram_name: 'First BPMN Diagram',
        diagram_description: 'string',
        file_urls: ['string'],
    },
    {
        diagram_id: '2',
        diagram_data: `<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:signavio="http://www.signavio.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" exporter="Signavio Process Editor, http://www.signavio.com" exporterVersion="9.3.2" expressionLanguage="http://www.w3.org/TR/XPath" id="sid-83ed6021-15b8-42df-b971-a63f5e32fb4f" targetNamespace="http://www.signavio.com" typeLanguage="http://www.w3.org/2001/XMLSchema" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
   <collaboration id="sid-403fa843-143a-4d5e-8c39-59f628e3aa39">
      <extensionElements>
         <signavio:signavioDiagramMetaData metaKey="revisionid" metaValue="eec0098d1c324c5295a695320b4ab1a1"/>
      </extensionElements>
      <participant id="sid-40FD4BAF-A217-4AEE-8B75-7F49EC865A3C" name="Dispatch of Goods" processRef="sid-23D3B118-620B-462C-87E7-3FCA5A31C116">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
      </participant>
   </collaboration>
   <process id="sid-23D3B118-620B-462C-87E7-3FCA5A31C116" isClosed="false" isExecutable="false" name="Dispatch of Goods" processType="None">
      <extensionElements/>
      <laneSet id="sid-5a00a007-a3c0-420c-b67c-b2e3c2d43c83">
         <lane id="sid-1E36B82C-9733-4BE3-B057-853B9F413E6B" name="Secretary">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8</flowNodeRef>
            <flowNodeRef>sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E</flowNodeRef>
            <flowNodeRef>sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58</flowNodeRef>
            <flowNodeRef>sid-327EC495-8914-4A21-ADAC-F1FAD7887092</flowNodeRef>
            <flowNodeRef>sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4</flowNodeRef>
            <flowNodeRef>sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1</flowNodeRef>
            <flowNodeRef>sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37</flowNodeRef>
            <flowNodeRef>sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109</flowNodeRef>
            <flowNodeRef>sid-A1408C66-4C19-4A37-8540-567104D2E130</flowNodeRef>
            <flowNodeRef>sid-9472092E-BBE1-40FF-9FDB-045AF16A4809</flowNodeRef>
            <flowNodeRef>sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18</flowNodeRef>
            <flowNodeRef>sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C</flowNodeRef>
            <flowNodeRef>sid-205147B9-D6C3-47DA-9FC4-5105BA84D067</flowNodeRef>
            <flowNodeRef>sid-A6569A56-BF09-40A5-86E5-7B46BC22C490</flowNodeRef>
            <flowNodeRef>sid-71B26009-FA81-45D7-BDB5-866130BB228B</flowNodeRef>
         </lane>
         <lane id="sid-1763AF19-B6F2-43F4-B4F3-8040026139C6" name="Vendor 1">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8</flowNodeRef>
         </lane>
         <lane id="sid-E41ED7C8-E7B3-4718-80F7-9D42299FA03A" name="Vendor 2">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-A464927F-E7DD-4477-AD50-9FFEA044C66E</flowNodeRef>
         </lane>
         <lane id="sid-DAC68216-49C5-4E69-98B8-79E8643038B2" name="Vendor 3">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-525E5320-6F72-493B-925C-8E48F82370D0</flowNodeRef>
         </lane>
         <lane id="sid-7353FC4B-D962-4807-A7E7-17C2B089D07A" name="Warehousemen">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-59E4ED9D-9819-4C53-A995-1DD50A733181</flowNodeRef>
         </lane>
         <lane id="sid-BF81398A-363B-4827-9EEF-A04FC0EF5FCA" name="Logistics department">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548</flowNodeRef>
            <flowNodeRef>sid-B01A1ADA-82D5-4657-94EC-C6A222C31428</flowNodeRef>
         </lane>
      </laneSet>
      <startEvent id="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" isInterrupting="true" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <outgoing>sid-E180DA97-E03D-41B1-825C-5640B1343ABD</outgoing>
         <conditionalEventDefinition id="sid-298dc972-8dad-4ae4-9ac7-684120c49d95">
            <condition id="sid-a3922006-87d7-45e3-8035-931e5106b16f" xsi:type="tFormalExpression"/>
         </conditionalEventDefinition>
      </startEvent>
      <task completionQuantity="1" id="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E" isForCompensation="false" name="Determine Size" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-E180DA97-E03D-41B1-825C-5640B1343ABD</incoming>
         <outgoing>sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34</outgoing>
      </task>
      <exclusiveGateway gatewayDirection="Diverging" id="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34</incoming>
         <outgoing>sid-B998E856-3794-4904-A0F3-EBA4B44F00F5</outgoing>
         <outgoing>sid-F9D2304D-027C-473B-9629-EE534F7CB963</outgoing>
      </exclusiveGateway>
      <task completionQuantity="1" id="sid-327EC495-8914-4A21-ADAC-F1FAD7887092" isForCompensation="false" name="Normal post shipment" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-B998E856-3794-4904-A0F3-EBA4B44F00F5</incoming>
         <outgoing>sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD</outgoing>
      </task>
      <task completionQuantity="1" id="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4" isForCompensation="false" name="Special Shipping" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-F9D2304D-027C-473B-9629-EE534F7CB963</incoming>
         <outgoing>sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978</outgoing>
      </task>
      <task completionQuantity="1" id="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1" isForCompensation="false" name="Request Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978</incoming>
         <outgoing>sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3</outgoing>
      </task>
      <parallelGateway gatewayDirection="Diverging" id="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3</incoming>
         <outgoing>sid-56F4AA87-A49C-480B-B396-5A3F402E35ED</outgoing>
         <outgoing>sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2</outgoing>
      </parallelGateway>
      <parallelGateway gatewayDirection="Converging" id="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455</incoming>
         <incoming>sid-5A4AAD89-453E-4AA7-A286-83654280D5E7</incoming>
         <incoming>sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0</incoming>
         <outgoing>sid-C491E07D-4404-4A31-9739-640F2FDC1AE6</outgoing>
      </parallelGateway>
      <task completionQuantity="1" id="sid-A1408C66-4C19-4A37-8540-567104D2E130" isForCompensation="false" name="Select Vendor" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-C491E07D-4404-4A31-9739-640F2FDC1AE6</incoming>
         <outgoing>sid-DE169EF5-BBB8-4FCD-B391-2B260C462507</outgoing>
      </task>
      <task completionQuantity="1" id="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809" isForCompensation="false" name="Create Package Label" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD</incoming>
         <outgoing>sid-3ABD36F7-7533-4333-8FFF-2725E5856D10</outgoing>
      </task>
      <exclusiveGateway gatewayDirection="Diverging" id="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-3ABD36F7-7533-4333-8FFF-2725E5856D10</incoming>
         <outgoing>sid-3D647358-EF55-4CDA-BBDA-163463EA482E</outgoing>
         <outgoing>sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743</outgoing>
      </exclusiveGateway>
      <endEvent id="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743</incoming>
      </endEvent>
      <parallelGateway gatewayDirection="Diverging" id="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2</incoming>
         <outgoing>sid-13628390-9255-4FBD-BD5C-4F8B2E29197A</outgoing>
         <outgoing>sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7</outgoing>
         <outgoing>sid-EC39B233-C77C-4B84-81A8-F43E9D138970</outgoing>
      </parallelGateway>
      <parallelGateway gatewayDirection="Converging" id="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC</incoming>
         <incoming>sid-DE169EF5-BBB8-4FCD-B391-2B260C462507</incoming>
         <outgoing>sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE</outgoing>
      </parallelGateway>
      <endEvent id="sid-71B26009-FA81-45D7-BDB5-866130BB228B" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE</incoming>
      </endEvent>
      <task completionQuantity="1" id="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8" isForCompensation="false" name="Submit Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-EC39B233-C77C-4B84-81A8-F43E9D138970</incoming>
         <outgoing>sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0</outgoing>
      </task>
      <task completionQuantity="1" id="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E" isForCompensation="false" name="Submit Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7</incoming>
         <outgoing>sid-5A4AAD89-453E-4AA7-A286-83654280D5E7</outgoing>
      </task>
      <task completionQuantity="1" id="sid-525E5320-6F72-493B-925C-8E48F82370D0" isForCompensation="false" name="Submit Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-13628390-9255-4FBD-BD5C-4F8B2E29197A</incoming>
         <outgoing>sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455</outgoing>
      </task>
      <task completionQuantity="1" id="sid-59E4ED9D-9819-4C53-A995-1DD50A733181" isForCompensation="false" name="Package Goods" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-56F4AA87-A49C-480B-B396-5A3F402E35ED</incoming>
         <outgoing>sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC</outgoing>
      </task>
      <task completionQuantity="1" id="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548" isForCompensation="false" name="Purchase Insurance" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-3D647358-EF55-4CDA-BBDA-163463EA482E</incoming>
         <outgoing>sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9</outgoing>
      </task>
      <endEvent id="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9</incoming>
      </endEvent>
      <sequenceFlow id="sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34" name="" sourceRef="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E" targetRef="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58"/>
      <sequenceFlow id="sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978" name="" sourceRef="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4" targetRef="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1"/>
      <sequenceFlow id="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5" name="" sourceRef="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" targetRef="sid-327EC495-8914-4A21-ADAC-F1FAD7887092"/>
      <sequenceFlow id="sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3" name="" sourceRef="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1" targetRef="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37"/>
      <sequenceFlow id="sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD" name="" sourceRef="sid-327EC495-8914-4A21-ADAC-F1FAD7887092" targetRef="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809"/>
      <sequenceFlow id="sid-3ABD36F7-7533-4333-8FFF-2725E5856D10" name="" sourceRef="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809" targetRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18"/>
      <sequenceFlow id="sid-3D647358-EF55-4CDA-BBDA-163463EA482E" name="" sourceRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" targetRef="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548"/>
      <sequenceFlow id="sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9" name="" sourceRef="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548" targetRef="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428"/>
      <sequenceFlow id="sid-56F4AA87-A49C-480B-B396-5A3F402E35ED" name="" sourceRef="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" targetRef="sid-59E4ED9D-9819-4C53-A995-1DD50A733181"/>
      <sequenceFlow id="sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743" name="" sourceRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" targetRef="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C"/>
      <sequenceFlow id="sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2" name="" sourceRef="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" targetRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067"/>
      <sequenceFlow id="sid-C491E07D-4404-4A31-9739-640F2FDC1AE6" name="" sourceRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109" targetRef="sid-A1408C66-4C19-4A37-8540-567104D2E130"/>
      <sequenceFlow id="sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC" name="" sourceRef="sid-59E4ED9D-9819-4C53-A995-1DD50A733181" targetRef="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490"/>
      <sequenceFlow id="sid-DE169EF5-BBB8-4FCD-B391-2B260C462507" name="" sourceRef="sid-A1408C66-4C19-4A37-8540-567104D2E130" targetRef="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490"/>
      <sequenceFlow id="sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE" name="" sourceRef="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490" targetRef="sid-71B26009-FA81-45D7-BDB5-866130BB228B"/>
      <sequenceFlow id="sid-13628390-9255-4FBD-BD5C-4F8B2E29197A" name="" sourceRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" targetRef="sid-525E5320-6F72-493B-925C-8E48F82370D0"/>
      <sequenceFlow id="sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7" name="" sourceRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" targetRef="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E"/>
      <sequenceFlow id="sid-EC39B233-C77C-4B84-81A8-F43E9D138970" name="" sourceRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" targetRef="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8"/>
      <sequenceFlow id="sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455" name="" sourceRef="sid-525E5320-6F72-493B-925C-8E48F82370D0" targetRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109"/>
      <sequenceFlow id="sid-5A4AAD89-453E-4AA7-A286-83654280D5E7" name="" sourceRef="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E" targetRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109"/>
      <sequenceFlow id="sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0" name="" sourceRef="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8" targetRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109"/>
      <sequenceFlow id="sid-F9D2304D-027C-473B-9629-EE534F7CB963" name="" sourceRef="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" targetRef="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4"/>
      <sequenceFlow id="sid-E180DA97-E03D-41B1-825C-5640B1343ABD" name="" sourceRef="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" targetRef="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E"/>
      <association associationDirection="None" id="sid-21E4C5C8-82A4-4952-8C9D-70541060233F" sourceRef="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" targetRef="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A"/>
      <association associationDirection="None" id="sid-14AF078E-573F-408A-9626-5AF18B0E07E7" sourceRef="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5" targetRef="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25"/>
      <association associationDirection="None" id="sid-4320B584-2E94-4204-86BC-1BD71DC46E9C" sourceRef="sid-F9D2304D-027C-473B-9629-EE534F7CB963" targetRef="sid-86418154-10CC-467E-8430-C42FD1CB1D3B"/>
      <association associationDirection="None" id="sid-F9C85FB5-89D7-460C-A3E0-382C8372B807" sourceRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" targetRef="sid-B151BF0C-60DF-4355-A78A-FF77621203FF"/>
      <textAnnotation id="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A" textFormat="text/plain">
         <text>Goods shall be shipped</text>
      </textAnnotation>
      <textAnnotation id="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25" textFormat="text/plain">
         <text>Small Amounts</text>
      </textAnnotation>
      <textAnnotation id="sid-86418154-10CC-467E-8430-C42FD1CB1D3B" textFormat="text/plain">
         <text>Large Amounts</text>
      </textAnnotation>
      <textAnnotation id="sid-B151BF0C-60DF-4355-A78A-FF77621203FF" textFormat="text/plain">
         <text>If Insurance is required</text>
      </textAnnotation>
   </process>
   <process id="sid-db34fc7b-c49c-4542-9048-fcc0313c0cda" isClosed="false" isExecutable="false" processType="None">
      <task completionQuantity="1" id="sid-D2A83D67-359A-4C2D-A4A5-EE6F61932675" isForCompensation="false" name="" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
      </task>
   </process>
   <bpmndi:BPMNDiagram id="sid-6cd7a277-2063-47f4-a44d-2c3a88e85726">
      <bpmndi:BPMNPlane bpmnElement="sid-403fa843-143a-4d5e-8c39-59f628e3aa39" id="sid-9bb4fada-88a8-43b1-954b-b51ea8eb9e4e">
         <bpmndi:BPMNShape bpmnElement="sid-40FD4BAF-A217-4AEE-8B75-7F49EC865A3C" id="sid-40FD4BAF-A217-4AEE-8B75-7F49EC865A3C_gui" isHorizontal="true">
            <omgdc:Bounds height="1234.0" width="1697.0" x="30.0" y="175.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="101.05714416503906" width="12.000000000000014" x="34.99999999999999" y="741.4714279174805"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1E36B82C-9733-4BE3-B057-853B9F413E6B" id="sid-1E36B82C-9733-4BE3-B057-853B9F413E6B_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="569.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="51.68571472167969" width="12.000000000000014" x="65.0" y="641.6571426391602"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1763AF19-B6F2-43F4-B4F3-8040026139C6" id="sid-1763AF19-B6F2-43F4-B4F3-8040026139C6_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="766.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="50.14285659790039" width="12.000000000000014" x="65.0" y="839.4285717010498"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-E41ED7C8-E7B3-4718-80F7-9D42299FA03A" id="sid-E41ED7C8-E7B3-4718-80F7-9D42299FA03A_gui" isHorizontal="true">
            <omgdc:Bounds height="214.0" width="1667.0" x="60.0" y="963.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="50.14285659790039" width="12.000000000000014" x="65.0" y="1044.9285717010498"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-DAC68216-49C5-4E69-98B8-79E8643038B2" id="sid-DAC68216-49C5-4E69-98B8-79E8643038B2_gui" isHorizontal="true">
            <omgdc:Bounds height="232.0" width="1667.0" x="60.0" y="1177.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="50.14285659790039" width="12.000000000000014" x="65.0" y="1267.9285717010498"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-7353FC4B-D962-4807-A7E7-17C2B089D07A" id="sid-7353FC4B-D962-4807-A7E7-17C2B089D07A_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="372.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="84.85713958740234" width="12.000000000000014" x="65.0" y="428.0714302062988"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-BF81398A-363B-4827-9EEF-A04FC0EF5FCA" id="sid-BF81398A-363B-4827-9EEF-A04FC0EF5FCA_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="175.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="114.17142486572266" width="12.000000000000014" x="64.99999999999999" y="216.41428756713867"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" id="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="90.0" y="653.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E" id="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="165.0" y="628.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="81.77142333984375" x="174.11428833007812" y="660.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" id="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58_gui" isMarkerVisible="true">
            <omgdc:Bounds height="40.0" width="40.0" x="315.0" y="648.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-327EC495-8914-4A21-ADAC-F1FAD7887092" id="sid-327EC495-8914-4A21-ADAC-F1FAD7887092_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="525.0" y="584.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="24.0" width="66.34285736083984" x="541.8285713195801" y="610.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4" id="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="525.0" y="684.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="87.94285583496094" x="531.0285720825195" y="716.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1" id="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="675.0" y="684.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="75.5999984741211" x="687.2000007629395" y="716.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" id="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="894.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109" id="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="1245.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A1408C66-4C19-4A37-8540-567104D2E130" id="sid-A1408C66-4C19-4A37-8540-567104D2E130_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1320.0" y="684.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="75.5999984741211" x="1332.2000007629395" y="716.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809" id="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="675.0" y="584.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="24.0" width="82.5428466796875" x="683.7285766601562" y="610.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" id="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18_gui" isMarkerVisible="true">
            <omgdc:Bounds height="40.0" width="40.0" x="795.0" y="604.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C" id="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="900.0" y="610.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" id="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="1005.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490" id="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="1530.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-71B26009-FA81-45D7-BDB5-866130BB228B" id="sid-71B26009-FA81-45D7-BDB5-866130BB228B_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="1635.0" y="710.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8" id="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1110.0" y="825.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="69.42857360839844" x="1125.2857131958008" y="857.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E" id="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1110.0" y="1030.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="69.42857360839844" x="1125.2857131958008" y="1062.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-525E5320-6F72-493B-925C-8E48F82370D0" id="sid-525E5320-6F72-493B-925C-8E48F82370D0_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1110.0" y="1244.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="69.42857360839844" x="1125.2857131958008" y="1276.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-59E4ED9D-9819-4C53-A995-1DD50A733181" id="sid-59E4ED9D-9819-4C53-A995-1DD50A733181_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1111.2519166377645" y="397.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="82.5428466796875" x="1119.9804932979207" y="429.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548" id="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="765.0" y="234.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="24.0" width="53.22857666015625" x="788.3857116699219" y="260.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428" id="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="1011.0" y="260.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A" id="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="90.0" y="573.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="24.0" width="80.22856903076172" x="94.0" y="583.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25" id="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="345.0" y="573.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="12.0" width="81.77143096923828" x="349.0" y="589.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-86418154-10CC-467E-8430-C42FD1CB1D3B" id="sid-86418154-10CC-467E-8430-C42FD1CB1D3B_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="345.0" y="720.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="12.0" width="83.31428527832031" x="349.0" y="736.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-B151BF0C-60DF-4355-A78A-FF77621203FF" id="sid-B151BF0C-60DF-4355-A78A-FF77621203FF_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="765.0" y="643.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="24.0" width="77.14286041259766" x="769.0" y="653.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-D2A83D67-359A-4C2D-A4A5-EE6F61932675" id="sid-D2A83D67-359A-4C2D-A4A5-EE6F61932675_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="195.0" y="-776.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNEdge bpmnElement="sid-21E4C5C8-82A4-4952-8C9D-70541060233F" id="sid-21E4C5C8-82A4-4952-8C9D-70541060233F_gui">
            <omgdi:waypoint x="102.04225352112677" y="653.0"/>
            <omgdi:waypoint x="96.12676056338029" y="623.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34" id="sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34_gui">
            <omgdi:waypoint x="265.0" y="668.207468879668"/>
            <omgdi:waypoint x="315.0" y="668.4149377593361"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-14AF078E-573F-408A-9626-5AF18B0E07E7" id="sid-14AF078E-573F-408A-9626-5AF18B0E07E7_gui">
            <omgdi:waypoint x="362.76487523992324" y="624.0"/>
            <omgdi:waypoint x="362.1439539347409" y="623.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-4320B584-2E94-4204-86BC-1BD71DC46E9C" id="sid-4320B584-2E94-4204-86BC-1BD71DC46E9C_gui">
            <omgdi:waypoint x="367.6663240131579" y="724.0"/>
            <omgdi:waypoint x="346.0" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978" id="sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978_gui">
            <omgdi:waypoint x="625.0" y="724.0"/>
            <omgdi:waypoint x="675.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5" id="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5_gui">
            <omgdi:waypoint x="335.5" y="648.0"/>
            <omgdi:waypoint x="335.5" y="624.0"/>
            <omgdi:waypoint x="525.0" y="624.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3" id="sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3_gui">
            <omgdi:waypoint x="775.0" y="724.0"/>
            <omgdi:waypoint x="894.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD" id="sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD_gui">
            <omgdi:waypoint x="625.0" y="624.0"/>
            <omgdi:waypoint x="675.0" y="624.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-3ABD36F7-7533-4333-8FFF-2725E5856D10" id="sid-3ABD36F7-7533-4333-8FFF-2725E5856D10_gui">
            <omgdi:waypoint x="775.0" y="624.2762430939226"/>
            <omgdi:waypoint x="795.0" y="624.3867403314918"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-3D647358-EF55-4CDA-BBDA-163463EA482E" id="sid-3D647358-EF55-4CDA-BBDA-163463EA482E_gui">
            <omgdi:waypoint x="815.4707560627675" y="604.0"/>
            <omgdi:waypoint x="815.0570613409415" y="314.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-F9C85FB5-89D7-460C-A3E0-382C8372B807" id="sid-F9C85FB5-89D7-460C-A3E0-382C8372B807_gui">
            <omgdi:waypoint x="795.0" y="642.10101010101"/>
            <omgdi:waypoint x="793.9529411764705" y="643.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9" id="sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9_gui">
            <omgdi:waypoint x="865.0" y="274.0"/>
            <omgdi:waypoint x="1011.0" y="274.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-56F4AA87-A49C-480B-B396-5A3F402E35ED" id="sid-56F4AA87-A49C-480B-B396-5A3F402E35ED_gui">
            <omgdi:waypoint x="914.5" y="704.0"/>
            <omgdi:waypoint x="914.5" y="670.5"/>
            <omgdi:waypoint x="1161.2519166377645" y="670.5"/>
            <omgdi:waypoint x="1161.2519166377645" y="477.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743" id="sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743_gui">
            <omgdi:waypoint x="835.0" y="624.4010152284264"/>
            <omgdi:waypoint x="900.0" y="624.0710659898477"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2" id="sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2_gui">
            <omgdi:waypoint x="934.0" y="724.5"/>
            <omgdi:waypoint x="1005.0" y="724.5"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-C491E07D-4404-4A31-9739-640F2FDC1AE6" id="sid-C491E07D-4404-4A31-9739-640F2FDC1AE6_gui">
            <omgdi:waypoint x="1285.0" y="724.0"/>
            <omgdi:waypoint x="1320.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC" id="sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC_gui">
            <omgdi:waypoint x="1211.2519166377645" y="437.0"/>
            <omgdi:waypoint x="1550.5" y="437.0"/>
            <omgdi:waypoint x="1550.5" y="704.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-DE169EF5-BBB8-4FCD-B391-2B260C462507" id="sid-DE169EF5-BBB8-4FCD-B391-2B260C462507_gui">
            <omgdi:waypoint x="1420.0" y="724.0"/>
            <omgdi:waypoint x="1530.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE" id="sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE_gui">
            <omgdi:waypoint x="1570.0" y="724.4010152284264"/>
            <omgdi:waypoint x="1635.0" y="724.0710659898477"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-13628390-9255-4FBD-BD5C-4F8B2E29197A" id="sid-13628390-9255-4FBD-BD5C-4F8B2E29197A_gui">
            <omgdi:waypoint x="1025.5" y="744.0"/>
            <omgdi:waypoint x="1025.5" y="1284.0"/>
            <omgdi:waypoint x="1110.0" y="1284.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7" id="sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7_gui">
            <omgdi:waypoint x="1026.5" y="744.0"/>
            <omgdi:waypoint x="1026.5" y="1070.0"/>
            <omgdi:waypoint x="1110.0" y="1070.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-EC39B233-C77C-4B84-81A8-F43E9D138970" id="sid-EC39B233-C77C-4B84-81A8-F43E9D138970_gui">
            <omgdi:waypoint x="1025.5" y="744.0"/>
            <omgdi:waypoint x="1025.5" y="865.0"/>
            <omgdi:waypoint x="1110.0" y="865.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455" id="sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455_gui">
            <omgdi:waypoint x="1210.0" y="1284.0"/>
            <omgdi:waypoint x="1266.0" y="1284.0"/>
            <omgdi:waypoint x="1266.0" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-5A4AAD89-453E-4AA7-A286-83654280D5E7" id="sid-5A4AAD89-453E-4AA7-A286-83654280D5E7_gui">
            <omgdi:waypoint x="1210.0" y="1070.0"/>
            <omgdi:waypoint x="1264.0" y="1070.0"/>
            <omgdi:waypoint x="1264.0" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0" id="sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0_gui">
            <omgdi:waypoint x="1210.0" y="865.0"/>
            <omgdi:waypoint x="1265.5" y="865.0"/>
            <omgdi:waypoint x="1265.5" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-F9D2304D-027C-473B-9629-EE534F7CB963" id="sid-F9D2304D-027C-473B-9629-EE534F7CB963_gui">
            <omgdi:waypoint x="335.5" y="688.0"/>
            <omgdi:waypoint x="335.5" y="724.0"/>
            <omgdi:waypoint x="525.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-E180DA97-E03D-41B1-825C-5640B1343ABD" id="sid-E180DA97-E03D-41B1-825C-5640B1343ABD_gui">
            <omgdi:waypoint x="120.0" y="666.7511391044501"/>
            <omgdi:waypoint x="165.0" y="666.7511391044501"/>
         </bpmndi:BPMNEdge>
      </bpmndi:BPMNPlane>
      <bpmndi:BPMNLabelStyle id="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
         <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="11.0"/>
      </bpmndi:BPMNLabelStyle>
      <bpmndi:BPMNLabelStyle id="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
         <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="12.0"/>
      </bpmndi:BPMNLabelStyle>
   </bpmndi:BPMNDiagram>
</definitions>`,
        diagram_description: 'no des',
        diagram_name: 'Sample Diagram',
        file_urls: ['url'],
    },
    {
        diagram_id: '3',
        diagram_data: `<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:signavio="http://www.signavio.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" exporter="Signavio Process Editor, http://www.signavio.com" exporterVersion="9.3.2" expressionLanguage="http://www.w3.org/TR/XPath" id="sid-83ed6021-15b8-42df-b971-a63f5e32fb4f" targetNamespace="http://www.signavio.com" typeLanguage="http://www.w3.org/2001/XMLSchema" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
   <collaboration id="sid-403fa843-143a-4d5e-8c39-59f628e3aa39">
      <extensionElements>
         <signavio:signavioDiagramMetaData metaKey="revisionid" metaValue="eec0098d1c324c5295a695320b4ab1a1"/>
      </extensionElements>
      <participant id="sid-40FD4BAF-A217-4AEE-8B75-7F49EC865A3C" name="Dispatch of Goods" processRef="sid-23D3B118-620B-462C-87E7-3FCA5A31C116">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
      </participant>
   </collaboration>
   <process id="sid-23D3B118-620B-462C-87E7-3FCA5A31C116" isClosed="false" isExecutable="false" name="Dispatch of Goods" processType="None">
      <extensionElements/>
      <laneSet id="sid-5a00a007-a3c0-420c-b67c-b2e3c2d43c83">
         <lane id="sid-1E36B82C-9733-4BE3-B057-853B9F413E6B" name="Secretary">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8</flowNodeRef>
            <flowNodeRef>sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E</flowNodeRef>
            <flowNodeRef>sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58</flowNodeRef>
            <flowNodeRef>sid-327EC495-8914-4A21-ADAC-F1FAD7887092</flowNodeRef>
            <flowNodeRef>sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4</flowNodeRef>
            <flowNodeRef>sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1</flowNodeRef>
            <flowNodeRef>sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37</flowNodeRef>
            <flowNodeRef>sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109</flowNodeRef>
            <flowNodeRef>sid-A1408C66-4C19-4A37-8540-567104D2E130</flowNodeRef>
            <flowNodeRef>sid-9472092E-BBE1-40FF-9FDB-045AF16A4809</flowNodeRef>
            <flowNodeRef>sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18</flowNodeRef>
            <flowNodeRef>sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C</flowNodeRef>
            <flowNodeRef>sid-205147B9-D6C3-47DA-9FC4-5105BA84D067</flowNodeRef>
            <flowNodeRef>sid-A6569A56-BF09-40A5-86E5-7B46BC22C490</flowNodeRef>
            <flowNodeRef>sid-71B26009-FA81-45D7-BDB5-866130BB228B</flowNodeRef>
         </lane>
         <lane id="sid-1763AF19-B6F2-43F4-B4F3-8040026139C6" name="Vendor 1">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8</flowNodeRef>
         </lane>
         <lane id="sid-E41ED7C8-E7B3-4718-80F7-9D42299FA03A" name="Vendor 2">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-A464927F-E7DD-4477-AD50-9FFEA044C66E</flowNodeRef>
         </lane>
         <lane id="sid-DAC68216-49C5-4E69-98B8-79E8643038B2" name="Vendor 3">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-525E5320-6F72-493B-925C-8E48F82370D0</flowNodeRef>
         </lane>
         <lane id="sid-7353FC4B-D962-4807-A7E7-17C2B089D07A" name="Warehousemen">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-59E4ED9D-9819-4C53-A995-1DD50A733181</flowNodeRef>
         </lane>
         <lane id="sid-BF81398A-363B-4827-9EEF-A04FC0EF5FCA" name="Logistics department">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548</flowNodeRef>
            <flowNodeRef>sid-B01A1ADA-82D5-4657-94EC-C6A222C31428</flowNodeRef>
         </lane>
      </laneSet>
      <startEvent id="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" isInterrupting="true" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <outgoing>sid-E180DA97-E03D-41B1-825C-5640B1343ABD</outgoing>
         <conditionalEventDefinition id="sid-298dc972-8dad-4ae4-9ac7-684120c49d95">
            <condition id="sid-a3922006-87d7-45e3-8035-931e5106b16f" xsi:type="tFormalExpression"/>
         </conditionalEventDefinition>
      </startEvent>
      <task completionQuantity="1" id="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E" isForCompensation="false" name="Determine Size" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-E180DA97-E03D-41B1-825C-5640B1343ABD</incoming>
         <outgoing>sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34</outgoing>
      </task>
      <exclusiveGateway gatewayDirection="Diverging" id="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34</incoming>
         <outgoing>sid-B998E856-3794-4904-A0F3-EBA4B44F00F5</outgoing>
         <outgoing>sid-F9D2304D-027C-473B-9629-EE534F7CB963</outgoing>
      </exclusiveGateway>
      <task completionQuantity="1" id="sid-327EC495-8914-4A21-ADAC-F1FAD7887092" isForCompensation="false" name="Normal post shipment" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-B998E856-3794-4904-A0F3-EBA4B44F00F5</incoming>
         <outgoing>sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD</outgoing>
      </task>
      <task completionQuantity="1" id="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4" isForCompensation="false" name="Special Shipping" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-F9D2304D-027C-473B-9629-EE534F7CB963</incoming>
         <outgoing>sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978</outgoing>
      </task>
      <task completionQuantity="1" id="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1" isForCompensation="false" name="Request Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978</incoming>
         <outgoing>sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3</outgoing>
      </task>
      <parallelGateway gatewayDirection="Diverging" id="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3</incoming>
         <outgoing>sid-56F4AA87-A49C-480B-B396-5A3F402E35ED</outgoing>
         <outgoing>sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2</outgoing>
      </parallelGateway>
      <parallelGateway gatewayDirection="Converging" id="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455</incoming>
         <incoming>sid-5A4AAD89-453E-4AA7-A286-83654280D5E7</incoming>
         <incoming>sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0</incoming>
         <outgoing>sid-C491E07D-4404-4A31-9739-640F2FDC1AE6</outgoing>
      </parallelGateway>
      <task completionQuantity="1" id="sid-A1408C66-4C19-4A37-8540-567104D2E130" isForCompensation="false" name="Select Vendor" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-C491E07D-4404-4A31-9739-640F2FDC1AE6</incoming>
         <outgoing>sid-DE169EF5-BBB8-4FCD-B391-2B260C462507</outgoing>
      </task>
      <task completionQuantity="1" id="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809" isForCompensation="false" name="Create Package Label" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD</incoming>
         <outgoing>sid-3ABD36F7-7533-4333-8FFF-2725E5856D10</outgoing>
      </task>
      <exclusiveGateway gatewayDirection="Diverging" id="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-3ABD36F7-7533-4333-8FFF-2725E5856D10</incoming>
         <outgoing>sid-3D647358-EF55-4CDA-BBDA-163463EA482E</outgoing>
         <outgoing>sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743</outgoing>
      </exclusiveGateway>
      <endEvent id="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743</incoming>
      </endEvent>
      <parallelGateway gatewayDirection="Diverging" id="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2</incoming>
         <outgoing>sid-13628390-9255-4FBD-BD5C-4F8B2E29197A</outgoing>
         <outgoing>sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7</outgoing>
         <outgoing>sid-EC39B233-C77C-4B84-81A8-F43E9D138970</outgoing>
      </parallelGateway>
      <parallelGateway gatewayDirection="Converging" id="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC</incoming>
         <incoming>sid-DE169EF5-BBB8-4FCD-B391-2B260C462507</incoming>
         <outgoing>sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE</outgoing>
      </parallelGateway>
      <endEvent id="sid-71B26009-FA81-45D7-BDB5-866130BB228B" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE</incoming>
      </endEvent>
      <task completionQuantity="1" id="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8" isForCompensation="false" name="Submit Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-EC39B233-C77C-4B84-81A8-F43E9D138970</incoming>
         <outgoing>sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0</outgoing>
      </task>
      <task completionQuantity="1" id="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E" isForCompensation="false" name="Submit Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7</incoming>
         <outgoing>sid-5A4AAD89-453E-4AA7-A286-83654280D5E7</outgoing>
      </task>
      <task completionQuantity="1" id="sid-525E5320-6F72-493B-925C-8E48F82370D0" isForCompensation="false" name="Submit Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-13628390-9255-4FBD-BD5C-4F8B2E29197A</incoming>
         <outgoing>sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455</outgoing>
      </task>
      <task completionQuantity="1" id="sid-59E4ED9D-9819-4C53-A995-1DD50A733181" isForCompensation="false" name="Package Goods" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-56F4AA87-A49C-480B-B396-5A3F402E35ED</incoming>
         <outgoing>sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC</outgoing>
      </task>
      <task completionQuantity="1" id="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548" isForCompensation="false" name="Purchase Insurance" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-3D647358-EF55-4CDA-BBDA-163463EA482E</incoming>
         <outgoing>sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9</outgoing>
      </task>
      <endEvent id="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9</incoming>
      </endEvent>
      <sequenceFlow id="sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34" name="" sourceRef="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E" targetRef="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58"/>
      <sequenceFlow id="sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978" name="" sourceRef="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4" targetRef="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1"/>
      <sequenceFlow id="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5" name="" sourceRef="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" targetRef="sid-327EC495-8914-4A21-ADAC-F1FAD7887092"/>
      <sequenceFlow id="sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3" name="" sourceRef="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1" targetRef="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37"/>
      <sequenceFlow id="sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD" name="" sourceRef="sid-327EC495-8914-4A21-ADAC-F1FAD7887092" targetRef="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809"/>
      <sequenceFlow id="sid-3ABD36F7-7533-4333-8FFF-2725E5856D10" name="" sourceRef="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809" targetRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18"/>
      <sequenceFlow id="sid-3D647358-EF55-4CDA-BBDA-163463EA482E" name="" sourceRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" targetRef="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548"/>
      <sequenceFlow id="sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9" name="" sourceRef="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548" targetRef="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428"/>
      <sequenceFlow id="sid-56F4AA87-A49C-480B-B396-5A3F402E35ED" name="" sourceRef="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" targetRef="sid-59E4ED9D-9819-4C53-A995-1DD50A733181"/>
      <sequenceFlow id="sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743" name="" sourceRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" targetRef="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C"/>
      <sequenceFlow id="sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2" name="" sourceRef="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" targetRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067"/>
      <sequenceFlow id="sid-C491E07D-4404-4A31-9739-640F2FDC1AE6" name="" sourceRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109" targetRef="sid-A1408C66-4C19-4A37-8540-567104D2E130"/>
      <sequenceFlow id="sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC" name="" sourceRef="sid-59E4ED9D-9819-4C53-A995-1DD50A733181" targetRef="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490"/>
      <sequenceFlow id="sid-DE169EF5-BBB8-4FCD-B391-2B260C462507" name="" sourceRef="sid-A1408C66-4C19-4A37-8540-567104D2E130" targetRef="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490"/>
      <sequenceFlow id="sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE" name="" sourceRef="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490" targetRef="sid-71B26009-FA81-45D7-BDB5-866130BB228B"/>
      <sequenceFlow id="sid-13628390-9255-4FBD-BD5C-4F8B2E29197A" name="" sourceRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" targetRef="sid-525E5320-6F72-493B-925C-8E48F82370D0"/>
      <sequenceFlow id="sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7" name="" sourceRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" targetRef="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E"/>
      <sequenceFlow id="sid-EC39B233-C77C-4B84-81A8-F43E9D138970" name="" sourceRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" targetRef="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8"/>
      <sequenceFlow id="sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455" name="" sourceRef="sid-525E5320-6F72-493B-925C-8E48F82370D0" targetRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109"/>
      <sequenceFlow id="sid-5A4AAD89-453E-4AA7-A286-83654280D5E7" name="" sourceRef="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E" targetRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109"/>
      <sequenceFlow id="sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0" name="" sourceRef="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8" targetRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109"/>
      <sequenceFlow id="sid-F9D2304D-027C-473B-9629-EE534F7CB963" name="" sourceRef="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" targetRef="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4"/>
      <sequenceFlow id="sid-E180DA97-E03D-41B1-825C-5640B1343ABD" name="" sourceRef="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" targetRef="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E"/>
      <association associationDirection="None" id="sid-21E4C5C8-82A4-4952-8C9D-70541060233F" sourceRef="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" targetRef="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A"/>
      <association associationDirection="None" id="sid-14AF078E-573F-408A-9626-5AF18B0E07E7" sourceRef="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5" targetRef="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25"/>
      <association associationDirection="None" id="sid-4320B584-2E94-4204-86BC-1BD71DC46E9C" sourceRef="sid-F9D2304D-027C-473B-9629-EE534F7CB963" targetRef="sid-86418154-10CC-467E-8430-C42FD1CB1D3B"/>
      <association associationDirection="None" id="sid-F9C85FB5-89D7-460C-A3E0-382C8372B807" sourceRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" targetRef="sid-B151BF0C-60DF-4355-A78A-FF77621203FF"/>
      <textAnnotation id="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A" textFormat="text/plain">
         <text>Goods shall be shipped</text>
      </textAnnotation>
      <textAnnotation id="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25" textFormat="text/plain">
         <text>Small Amounts</text>
      </textAnnotation>
      <textAnnotation id="sid-86418154-10CC-467E-8430-C42FD1CB1D3B" textFormat="text/plain">
         <text>Large Amounts</text>
      </textAnnotation>
      <textAnnotation id="sid-B151BF0C-60DF-4355-A78A-FF77621203FF" textFormat="text/plain">
         <text>If Insurance is required</text>
      </textAnnotation>
   </process>
   <process id="sid-db34fc7b-c49c-4542-9048-fcc0313c0cda" isClosed="false" isExecutable="false" processType="None">
      <task completionQuantity="1" id="sid-D2A83D67-359A-4C2D-A4A5-EE6F61932675" isForCompensation="false" name="" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
      </task>
   </process>
   <bpmndi:BPMNDiagram id="sid-6cd7a277-2063-47f4-a44d-2c3a88e85726">
      <bpmndi:BPMNPlane bpmnElement="sid-403fa843-143a-4d5e-8c39-59f628e3aa39" id="sid-9bb4fada-88a8-43b1-954b-b51ea8eb9e4e">
         <bpmndi:BPMNShape bpmnElement="sid-40FD4BAF-A217-4AEE-8B75-7F49EC865A3C" id="sid-40FD4BAF-A217-4AEE-8B75-7F49EC865A3C_gui" isHorizontal="true">
            <omgdc:Bounds height="1234.0" width="1697.0" x="30.0" y="175.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="101.05714416503906" width="12.000000000000014" x="34.99999999999999" y="741.4714279174805"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1E36B82C-9733-4BE3-B057-853B9F413E6B" id="sid-1E36B82C-9733-4BE3-B057-853B9F413E6B_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="569.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="51.68571472167969" width="12.000000000000014" x="65.0" y="641.6571426391602"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1763AF19-B6F2-43F4-B4F3-8040026139C6" id="sid-1763AF19-B6F2-43F4-B4F3-8040026139C6_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="766.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="50.14285659790039" width="12.000000000000014" x="65.0" y="839.4285717010498"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-E41ED7C8-E7B3-4718-80F7-9D42299FA03A" id="sid-E41ED7C8-E7B3-4718-80F7-9D42299FA03A_gui" isHorizontal="true">
            <omgdc:Bounds height="214.0" width="1667.0" x="60.0" y="963.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="50.14285659790039" width="12.000000000000014" x="65.0" y="1044.9285717010498"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-DAC68216-49C5-4E69-98B8-79E8643038B2" id="sid-DAC68216-49C5-4E69-98B8-79E8643038B2_gui" isHorizontal="true">
            <omgdc:Bounds height="232.0" width="1667.0" x="60.0" y="1177.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="50.14285659790039" width="12.000000000000014" x="65.0" y="1267.9285717010498"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-7353FC4B-D962-4807-A7E7-17C2B089D07A" id="sid-7353FC4B-D962-4807-A7E7-17C2B089D07A_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="372.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="84.85713958740234" width="12.000000000000014" x="65.0" y="428.0714302062988"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-BF81398A-363B-4827-9EEF-A04FC0EF5FCA" id="sid-BF81398A-363B-4827-9EEF-A04FC0EF5FCA_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="175.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="114.17142486572266" width="12.000000000000014" x="64.99999999999999" y="216.41428756713867"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" id="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="90.0" y="653.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E" id="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="165.0" y="628.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="81.77142333984375" x="174.11428833007812" y="660.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" id="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58_gui" isMarkerVisible="true">
            <omgdc:Bounds height="40.0" width="40.0" x="315.0" y="648.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-327EC495-8914-4A21-ADAC-F1FAD7887092" id="sid-327EC495-8914-4A21-ADAC-F1FAD7887092_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="525.0" y="584.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="24.0" width="66.34285736083984" x="541.8285713195801" y="610.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4" id="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="525.0" y="684.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="87.94285583496094" x="531.0285720825195" y="716.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1" id="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="675.0" y="684.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="75.5999984741211" x="687.2000007629395" y="716.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" id="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="894.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109" id="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="1245.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A1408C66-4C19-4A37-8540-567104D2E130" id="sid-A1408C66-4C19-4A37-8540-567104D2E130_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1320.0" y="684.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="75.5999984741211" x="1332.2000007629395" y="716.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809" id="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="675.0" y="584.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="24.0" width="82.5428466796875" x="683.7285766601562" y="610.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" id="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18_gui" isMarkerVisible="true">
            <omgdc:Bounds height="40.0" width="40.0" x="795.0" y="604.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C" id="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="900.0" y="610.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" id="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="1005.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490" id="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="1530.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-71B26009-FA81-45D7-BDB5-866130BB228B" id="sid-71B26009-FA81-45D7-BDB5-866130BB228B_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="1635.0" y="710.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8" id="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1110.0" y="825.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="69.42857360839844" x="1125.2857131958008" y="857.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E" id="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1110.0" y="1030.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="69.42857360839844" x="1125.2857131958008" y="1062.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-525E5320-6F72-493B-925C-8E48F82370D0" id="sid-525E5320-6F72-493B-925C-8E48F82370D0_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1110.0" y="1244.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="69.42857360839844" x="1125.2857131958008" y="1276.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-59E4ED9D-9819-4C53-A995-1DD50A733181" id="sid-59E4ED9D-9819-4C53-A995-1DD50A733181_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1111.2519166377645" y="397.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="82.5428466796875" x="1119.9804932979207" y="429.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548" id="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="765.0" y="234.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="24.0" width="53.22857666015625" x="788.3857116699219" y="260.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428" id="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="1011.0" y="260.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A" id="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="90.0" y="573.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="24.0" width="80.22856903076172" x="94.0" y="583.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25" id="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="345.0" y="573.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="12.0" width="81.77143096923828" x="349.0" y="589.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-86418154-10CC-467E-8430-C42FD1CB1D3B" id="sid-86418154-10CC-467E-8430-C42FD1CB1D3B_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="345.0" y="720.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="12.0" width="83.31428527832031" x="349.0" y="736.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-B151BF0C-60DF-4355-A78A-FF77621203FF" id="sid-B151BF0C-60DF-4355-A78A-FF77621203FF_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="765.0" y="643.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="24.0" width="77.14286041259766" x="769.0" y="653.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-D2A83D67-359A-4C2D-A4A5-EE6F61932675" id="sid-D2A83D67-359A-4C2D-A4A5-EE6F61932675_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="195.0" y="-776.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNEdge bpmnElement="sid-21E4C5C8-82A4-4952-8C9D-70541060233F" id="sid-21E4C5C8-82A4-4952-8C9D-70541060233F_gui">
            <omgdi:waypoint x="102.04225352112677" y="653.0"/>
            <omgdi:waypoint x="96.12676056338029" y="623.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34" id="sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34_gui">
            <omgdi:waypoint x="265.0" y="668.207468879668"/>
            <omgdi:waypoint x="315.0" y="668.4149377593361"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-14AF078E-573F-408A-9626-5AF18B0E07E7" id="sid-14AF078E-573F-408A-9626-5AF18B0E07E7_gui">
            <omgdi:waypoint x="362.76487523992324" y="624.0"/>
            <omgdi:waypoint x="362.1439539347409" y="623.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-4320B584-2E94-4204-86BC-1BD71DC46E9C" id="sid-4320B584-2E94-4204-86BC-1BD71DC46E9C_gui">
            <omgdi:waypoint x="367.6663240131579" y="724.0"/>
            <omgdi:waypoint x="346.0" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978" id="sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978_gui">
            <omgdi:waypoint x="625.0" y="724.0"/>
            <omgdi:waypoint x="675.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5" id="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5_gui">
            <omgdi:waypoint x="335.5" y="648.0"/>
            <omgdi:waypoint x="335.5" y="624.0"/>
            <omgdi:waypoint x="525.0" y="624.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3" id="sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3_gui">
            <omgdi:waypoint x="775.0" y="724.0"/>
            <omgdi:waypoint x="894.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD" id="sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD_gui">
            <omgdi:waypoint x="625.0" y="624.0"/>
            <omgdi:waypoint x="675.0" y="624.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-3ABD36F7-7533-4333-8FFF-2725E5856D10" id="sid-3ABD36F7-7533-4333-8FFF-2725E5856D10_gui">
            <omgdi:waypoint x="775.0" y="624.2762430939226"/>
            <omgdi:waypoint x="795.0" y="624.3867403314918"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-3D647358-EF55-4CDA-BBDA-163463EA482E" id="sid-3D647358-EF55-4CDA-BBDA-163463EA482E_gui">
            <omgdi:waypoint x="815.4707560627675" y="604.0"/>
            <omgdi:waypoint x="815.0570613409415" y="314.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-F9C85FB5-89D7-460C-A3E0-382C8372B807" id="sid-F9C85FB5-89D7-460C-A3E0-382C8372B807_gui">
            <omgdi:waypoint x="795.0" y="642.10101010101"/>
            <omgdi:waypoint x="793.9529411764705" y="643.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9" id="sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9_gui">
            <omgdi:waypoint x="865.0" y="274.0"/>
            <omgdi:waypoint x="1011.0" y="274.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-56F4AA87-A49C-480B-B396-5A3F402E35ED" id="sid-56F4AA87-A49C-480B-B396-5A3F402E35ED_gui">
            <omgdi:waypoint x="914.5" y="704.0"/>
            <omgdi:waypoint x="914.5" y="670.5"/>
            <omgdi:waypoint x="1161.2519166377645" y="670.5"/>
            <omgdi:waypoint x="1161.2519166377645" y="477.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743" id="sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743_gui">
            <omgdi:waypoint x="835.0" y="624.4010152284264"/>
            <omgdi:waypoint x="900.0" y="624.0710659898477"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2" id="sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2_gui">
            <omgdi:waypoint x="934.0" y="724.5"/>
            <omgdi:waypoint x="1005.0" y="724.5"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-C491E07D-4404-4A31-9739-640F2FDC1AE6" id="sid-C491E07D-4404-4A31-9739-640F2FDC1AE6_gui">
            <omgdi:waypoint x="1285.0" y="724.0"/>
            <omgdi:waypoint x="1320.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC" id="sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC_gui">
            <omgdi:waypoint x="1211.2519166377645" y="437.0"/>
            <omgdi:waypoint x="1550.5" y="437.0"/>
            <omgdi:waypoint x="1550.5" y="704.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-DE169EF5-BBB8-4FCD-B391-2B260C462507" id="sid-DE169EF5-BBB8-4FCD-B391-2B260C462507_gui">
            <omgdi:waypoint x="1420.0" y="724.0"/>
            <omgdi:waypoint x="1530.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE" id="sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE_gui">
            <omgdi:waypoint x="1570.0" y="724.4010152284264"/>
            <omgdi:waypoint x="1635.0" y="724.0710659898477"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-13628390-9255-4FBD-BD5C-4F8B2E29197A" id="sid-13628390-9255-4FBD-BD5C-4F8B2E29197A_gui">
            <omgdi:waypoint x="1025.5" y="744.0"/>
            <omgdi:waypoint x="1025.5" y="1284.0"/>
            <omgdi:waypoint x="1110.0" y="1284.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7" id="sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7_gui">
            <omgdi:waypoint x="1026.5" y="744.0"/>
            <omgdi:waypoint x="1026.5" y="1070.0"/>
            <omgdi:waypoint x="1110.0" y="1070.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-EC39B233-C77C-4B84-81A8-F43E9D138970" id="sid-EC39B233-C77C-4B84-81A8-F43E9D138970_gui">
            <omgdi:waypoint x="1025.5" y="744.0"/>
            <omgdi:waypoint x="1025.5" y="865.0"/>
            <omgdi:waypoint x="1110.0" y="865.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455" id="sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455_gui">
            <omgdi:waypoint x="1210.0" y="1284.0"/>
            <omgdi:waypoint x="1266.0" y="1284.0"/>
            <omgdi:waypoint x="1266.0" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-5A4AAD89-453E-4AA7-A286-83654280D5E7" id="sid-5A4AAD89-453E-4AA7-A286-83654280D5E7_gui">
            <omgdi:waypoint x="1210.0" y="1070.0"/>
            <omgdi:waypoint x="1264.0" y="1070.0"/>
            <omgdi:waypoint x="1264.0" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0" id="sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0_gui">
            <omgdi:waypoint x="1210.0" y="865.0"/>
            <omgdi:waypoint x="1265.5" y="865.0"/>
            <omgdi:waypoint x="1265.5" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-F9D2304D-027C-473B-9629-EE534F7CB963" id="sid-F9D2304D-027C-473B-9629-EE534F7CB963_gui">
            <omgdi:waypoint x="335.5" y="688.0"/>
            <omgdi:waypoint x="335.5" y="724.0"/>
            <omgdi:waypoint x="525.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-E180DA97-E03D-41B1-825C-5640B1343ABD" id="sid-E180DA97-E03D-41B1-825C-5640B1343ABD_gui">
            <omgdi:waypoint x="120.0" y="666.7511391044501"/>
            <omgdi:waypoint x="165.0" y="666.7511391044501"/>
         </bpmndi:BPMNEdge>
      </bpmndi:BPMNPlane>
      <bpmndi:BPMNLabelStyle id="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
         <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="11.0"/>
      </bpmndi:BPMNLabelStyle>
      <bpmndi:BPMNLabelStyle id="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
         <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="12.0"/>
      </bpmndi:BPMNLabelStyle>
   </bpmndi:BPMNDiagram>
</definitions>`,
        diagram_name: 'First BPMN Diagram',
        diagram_description: 'string',
        file_urls: ['string'],
    },
    {
        diagram_id: '4',
        diagram_data: `<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:signavio="http://www.signavio.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" exporter="Signavio Process Editor, http://www.signavio.com" exporterVersion="9.3.2" expressionLanguage="http://www.w3.org/TR/XPath" id="sid-83ed6021-15b8-42df-b971-a63f5e32fb4f" targetNamespace="http://www.signavio.com" typeLanguage="http://www.w3.org/2001/XMLSchema" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
   <collaboration id="sid-403fa843-143a-4d5e-8c39-59f628e3aa39">
      <extensionElements>
         <signavio:signavioDiagramMetaData metaKey="revisionid" metaValue="eec0098d1c324c5295a695320b4ab1a1"/>
      </extensionElements>
      <participant id="sid-40FD4BAF-A217-4AEE-8B75-7F49EC865A3C" name="Dispatch of Goods" processRef="sid-23D3B118-620B-462C-87E7-3FCA5A31C116">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
      </participant>
   </collaboration>
   <process id="sid-23D3B118-620B-462C-87E7-3FCA5A31C116" isClosed="false" isExecutable="false" name="Dispatch of Goods" processType="None">
      <extensionElements/>
      <laneSet id="sid-5a00a007-a3c0-420c-b67c-b2e3c2d43c83">
         <lane id="sid-1E36B82C-9733-4BE3-B057-853B9F413E6B" name="Secretary">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8</flowNodeRef>
            <flowNodeRef>sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E</flowNodeRef>
            <flowNodeRef>sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58</flowNodeRef>
            <flowNodeRef>sid-327EC495-8914-4A21-ADAC-F1FAD7887092</flowNodeRef>
            <flowNodeRef>sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4</flowNodeRef>
            <flowNodeRef>sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1</flowNodeRef>
            <flowNodeRef>sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37</flowNodeRef>
            <flowNodeRef>sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109</flowNodeRef>
            <flowNodeRef>sid-A1408C66-4C19-4A37-8540-567104D2E130</flowNodeRef>
            <flowNodeRef>sid-9472092E-BBE1-40FF-9FDB-045AF16A4809</flowNodeRef>
            <flowNodeRef>sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18</flowNodeRef>
            <flowNodeRef>sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C</flowNodeRef>
            <flowNodeRef>sid-205147B9-D6C3-47DA-9FC4-5105BA84D067</flowNodeRef>
            <flowNodeRef>sid-A6569A56-BF09-40A5-86E5-7B46BC22C490</flowNodeRef>
            <flowNodeRef>sid-71B26009-FA81-45D7-BDB5-866130BB228B</flowNodeRef>
         </lane>
         <lane id="sid-1763AF19-B6F2-43F4-B4F3-8040026139C6" name="Vendor 1">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8</flowNodeRef>
         </lane>
         <lane id="sid-E41ED7C8-E7B3-4718-80F7-9D42299FA03A" name="Vendor 2">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-A464927F-E7DD-4477-AD50-9FFEA044C66E</flowNodeRef>
         </lane>
         <lane id="sid-DAC68216-49C5-4E69-98B8-79E8643038B2" name="Vendor 3">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-525E5320-6F72-493B-925C-8E48F82370D0</flowNodeRef>
         </lane>
         <lane id="sid-7353FC4B-D962-4807-A7E7-17C2B089D07A" name="Warehousemen">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-59E4ED9D-9819-4C53-A995-1DD50A733181</flowNodeRef>
         </lane>
         <lane id="sid-BF81398A-363B-4827-9EEF-A04FC0EF5FCA" name="Logistics department">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
            </extensionElements>
            <flowNodeRef>sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548</flowNodeRef>
            <flowNodeRef>sid-B01A1ADA-82D5-4657-94EC-C6A222C31428</flowNodeRef>
         </lane>
      </laneSet>
      <startEvent id="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" isInterrupting="true" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <outgoing>sid-E180DA97-E03D-41B1-825C-5640B1343ABD</outgoing>
         <conditionalEventDefinition id="sid-298dc972-8dad-4ae4-9ac7-684120c49d95">
            <condition id="sid-a3922006-87d7-45e3-8035-931e5106b16f" xsi:type="tFormalExpression"/>
         </conditionalEventDefinition>
      </startEvent>
      <task completionQuantity="1" id="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E" isForCompensation="false" name="Determine Size" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-E180DA97-E03D-41B1-825C-5640B1343ABD</incoming>
         <outgoing>sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34</outgoing>
      </task>
      <exclusiveGateway gatewayDirection="Diverging" id="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34</incoming>
         <outgoing>sid-B998E856-3794-4904-A0F3-EBA4B44F00F5</outgoing>
         <outgoing>sid-F9D2304D-027C-473B-9629-EE534F7CB963</outgoing>
      </exclusiveGateway>
      <task completionQuantity="1" id="sid-327EC495-8914-4A21-ADAC-F1FAD7887092" isForCompensation="false" name="Normal post shipment" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-B998E856-3794-4904-A0F3-EBA4B44F00F5</incoming>
         <outgoing>sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD</outgoing>
      </task>
      <task completionQuantity="1" id="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4" isForCompensation="false" name="Special Shipping" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-F9D2304D-027C-473B-9629-EE534F7CB963</incoming>
         <outgoing>sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978</outgoing>
      </task>
      <task completionQuantity="1" id="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1" isForCompensation="false" name="Request Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978</incoming>
         <outgoing>sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3</outgoing>
      </task>
      <parallelGateway gatewayDirection="Diverging" id="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3</incoming>
         <outgoing>sid-56F4AA87-A49C-480B-B396-5A3F402E35ED</outgoing>
         <outgoing>sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2</outgoing>
      </parallelGateway>
      <parallelGateway gatewayDirection="Converging" id="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455</incoming>
         <incoming>sid-5A4AAD89-453E-4AA7-A286-83654280D5E7</incoming>
         <incoming>sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0</incoming>
         <outgoing>sid-C491E07D-4404-4A31-9739-640F2FDC1AE6</outgoing>
      </parallelGateway>
      <task completionQuantity="1" id="sid-A1408C66-4C19-4A37-8540-567104D2E130" isForCompensation="false" name="Select Vendor" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-C491E07D-4404-4A31-9739-640F2FDC1AE6</incoming>
         <outgoing>sid-DE169EF5-BBB8-4FCD-B391-2B260C462507</outgoing>
      </task>
      <task completionQuantity="1" id="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809" isForCompensation="false" name="Create Package Label" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD</incoming>
         <outgoing>sid-3ABD36F7-7533-4333-8FFF-2725E5856D10</outgoing>
      </task>
      <exclusiveGateway gatewayDirection="Diverging" id="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-3ABD36F7-7533-4333-8FFF-2725E5856D10</incoming>
         <outgoing>sid-3D647358-EF55-4CDA-BBDA-163463EA482E</outgoing>
         <outgoing>sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743</outgoing>
      </exclusiveGateway>
      <endEvent id="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743</incoming>
      </endEvent>
      <parallelGateway gatewayDirection="Diverging" id="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2</incoming>
         <outgoing>sid-13628390-9255-4FBD-BD5C-4F8B2E29197A</outgoing>
         <outgoing>sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7</outgoing>
         <outgoing>sid-EC39B233-C77C-4B84-81A8-F43E9D138970</outgoing>
      </parallelGateway>
      <parallelGateway gatewayDirection="Converging" id="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC</incoming>
         <incoming>sid-DE169EF5-BBB8-4FCD-B391-2B260C462507</incoming>
         <outgoing>sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE</outgoing>
      </parallelGateway>
      <endEvent id="sid-71B26009-FA81-45D7-BDB5-866130BB228B" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE</incoming>
      </endEvent>
      <task completionQuantity="1" id="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8" isForCompensation="false" name="Submit Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-EC39B233-C77C-4B84-81A8-F43E9D138970</incoming>
         <outgoing>sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0</outgoing>
      </task>
      <task completionQuantity="1" id="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E" isForCompensation="false" name="Submit Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7</incoming>
         <outgoing>sid-5A4AAD89-453E-4AA7-A286-83654280D5E7</outgoing>
      </task>
      <task completionQuantity="1" id="sid-525E5320-6F72-493B-925C-8E48F82370D0" isForCompensation="false" name="Submit Offer" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-13628390-9255-4FBD-BD5C-4F8B2E29197A</incoming>
         <outgoing>sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455</outgoing>
      </task>
      <task completionQuantity="1" id="sid-59E4ED9D-9819-4C53-A995-1DD50A733181" isForCompensation="false" name="Package Goods" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-56F4AA87-A49C-480B-B396-5A3F402E35ED</incoming>
         <outgoing>sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC</outgoing>
      </task>
      <task completionQuantity="1" id="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548" isForCompensation="false" name="Purchase Insurance" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
         <incoming>sid-3D647358-EF55-4CDA-BBDA-163463EA482E</incoming>
         <outgoing>sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9</outgoing>
      </task>
      <endEvent id="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428" name="">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         </extensionElements>
         <incoming>sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9</incoming>
      </endEvent>
      <sequenceFlow id="sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34" name="" sourceRef="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E" targetRef="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58"/>
      <sequenceFlow id="sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978" name="" sourceRef="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4" targetRef="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1"/>
      <sequenceFlow id="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5" name="" sourceRef="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" targetRef="sid-327EC495-8914-4A21-ADAC-F1FAD7887092"/>
      <sequenceFlow id="sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3" name="" sourceRef="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1" targetRef="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37"/>
      <sequenceFlow id="sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD" name="" sourceRef="sid-327EC495-8914-4A21-ADAC-F1FAD7887092" targetRef="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809"/>
      <sequenceFlow id="sid-3ABD36F7-7533-4333-8FFF-2725E5856D10" name="" sourceRef="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809" targetRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18"/>
      <sequenceFlow id="sid-3D647358-EF55-4CDA-BBDA-163463EA482E" name="" sourceRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" targetRef="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548"/>
      <sequenceFlow id="sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9" name="" sourceRef="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548" targetRef="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428"/>
      <sequenceFlow id="sid-56F4AA87-A49C-480B-B396-5A3F402E35ED" name="" sourceRef="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" targetRef="sid-59E4ED9D-9819-4C53-A995-1DD50A733181"/>
      <sequenceFlow id="sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743" name="" sourceRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" targetRef="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C"/>
      <sequenceFlow id="sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2" name="" sourceRef="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" targetRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067"/>
      <sequenceFlow id="sid-C491E07D-4404-4A31-9739-640F2FDC1AE6" name="" sourceRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109" targetRef="sid-A1408C66-4C19-4A37-8540-567104D2E130"/>
      <sequenceFlow id="sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC" name="" sourceRef="sid-59E4ED9D-9819-4C53-A995-1DD50A733181" targetRef="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490"/>
      <sequenceFlow id="sid-DE169EF5-BBB8-4FCD-B391-2B260C462507" name="" sourceRef="sid-A1408C66-4C19-4A37-8540-567104D2E130" targetRef="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490"/>
      <sequenceFlow id="sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE" name="" sourceRef="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490" targetRef="sid-71B26009-FA81-45D7-BDB5-866130BB228B"/>
      <sequenceFlow id="sid-13628390-9255-4FBD-BD5C-4F8B2E29197A" name="" sourceRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" targetRef="sid-525E5320-6F72-493B-925C-8E48F82370D0"/>
      <sequenceFlow id="sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7" name="" sourceRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" targetRef="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E"/>
      <sequenceFlow id="sid-EC39B233-C77C-4B84-81A8-F43E9D138970" name="" sourceRef="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" targetRef="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8"/>
      <sequenceFlow id="sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455" name="" sourceRef="sid-525E5320-6F72-493B-925C-8E48F82370D0" targetRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109"/>
      <sequenceFlow id="sid-5A4AAD89-453E-4AA7-A286-83654280D5E7" name="" sourceRef="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E" targetRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109"/>
      <sequenceFlow id="sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0" name="" sourceRef="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8" targetRef="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109"/>
      <sequenceFlow id="sid-F9D2304D-027C-473B-9629-EE534F7CB963" name="" sourceRef="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" targetRef="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4"/>
      <sequenceFlow id="sid-E180DA97-E03D-41B1-825C-5640B1343ABD" name="" sourceRef="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" targetRef="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E"/>
      <association associationDirection="None" id="sid-21E4C5C8-82A4-4952-8C9D-70541060233F" sourceRef="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" targetRef="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A"/>
      <association associationDirection="None" id="sid-14AF078E-573F-408A-9626-5AF18B0E07E7" sourceRef="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5" targetRef="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25"/>
      <association associationDirection="None" id="sid-4320B584-2E94-4204-86BC-1BD71DC46E9C" sourceRef="sid-F9D2304D-027C-473B-9629-EE534F7CB963" targetRef="sid-86418154-10CC-467E-8430-C42FD1CB1D3B"/>
      <association associationDirection="None" id="sid-F9C85FB5-89D7-460C-A3E0-382C8372B807" sourceRef="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" targetRef="sid-B151BF0C-60DF-4355-A78A-FF77621203FF"/>
      <textAnnotation id="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A" textFormat="text/plain">
         <text>Goods shall be shipped</text>
      </textAnnotation>
      <textAnnotation id="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25" textFormat="text/plain">
         <text>Small Amounts</text>
      </textAnnotation>
      <textAnnotation id="sid-86418154-10CC-467E-8430-C42FD1CB1D3B" textFormat="text/plain">
         <text>Large Amounts</text>
      </textAnnotation>
      <textAnnotation id="sid-B151BF0C-60DF-4355-A78A-FF77621203FF" textFormat="text/plain">
         <text>If Insurance is required</text>
      </textAnnotation>
   </process>
   <process id="sid-db34fc7b-c49c-4542-9048-fcc0313c0cda" isClosed="false" isExecutable="false" processType="None">
      <task completionQuantity="1" id="sid-D2A83D67-359A-4C2D-A4A5-EE6F61932675" isForCompensation="false" name="" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
            <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
         </extensionElements>
      </task>
   </process>
   <bpmndi:BPMNDiagram id="sid-6cd7a277-2063-47f4-a44d-2c3a88e85726">
      <bpmndi:BPMNPlane bpmnElement="sid-403fa843-143a-4d5e-8c39-59f628e3aa39" id="sid-9bb4fada-88a8-43b1-954b-b51ea8eb9e4e">
         <bpmndi:BPMNShape bpmnElement="sid-40FD4BAF-A217-4AEE-8B75-7F49EC865A3C" id="sid-40FD4BAF-A217-4AEE-8B75-7F49EC865A3C_gui" isHorizontal="true">
            <omgdc:Bounds height="1234.0" width="1697.0" x="30.0" y="175.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="101.05714416503906" width="12.000000000000014" x="34.99999999999999" y="741.4714279174805"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1E36B82C-9733-4BE3-B057-853B9F413E6B" id="sid-1E36B82C-9733-4BE3-B057-853B9F413E6B_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="569.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="51.68571472167969" width="12.000000000000014" x="65.0" y="641.6571426391602"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1763AF19-B6F2-43F4-B4F3-8040026139C6" id="sid-1763AF19-B6F2-43F4-B4F3-8040026139C6_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="766.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="50.14285659790039" width="12.000000000000014" x="65.0" y="839.4285717010498"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-E41ED7C8-E7B3-4718-80F7-9D42299FA03A" id="sid-E41ED7C8-E7B3-4718-80F7-9D42299FA03A_gui" isHorizontal="true">
            <omgdc:Bounds height="214.0" width="1667.0" x="60.0" y="963.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="50.14285659790039" width="12.000000000000014" x="65.0" y="1044.9285717010498"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-DAC68216-49C5-4E69-98B8-79E8643038B2" id="sid-DAC68216-49C5-4E69-98B8-79E8643038B2_gui" isHorizontal="true">
            <omgdc:Bounds height="232.0" width="1667.0" x="60.0" y="1177.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="50.14285659790039" width="12.000000000000014" x="65.0" y="1267.9285717010498"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-7353FC4B-D962-4807-A7E7-17C2B089D07A" id="sid-7353FC4B-D962-4807-A7E7-17C2B089D07A_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="372.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="84.85713958740234" width="12.000000000000014" x="65.0" y="428.0714302062988"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-BF81398A-363B-4827-9EEF-A04FC0EF5FCA" id="sid-BF81398A-363B-4827-9EEF-A04FC0EF5FCA_gui" isHorizontal="true">
            <omgdc:Bounds height="197.0" width="1667.0" x="60.0" y="175.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="114.17142486572266" width="12.000000000000014" x="64.99999999999999" y="216.41428756713867"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8" id="sid-22E11990-8DDF-4F3B-B94F-D4E6A70D3ED8_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="90.0" y="653.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E" id="sid-EF8CECA3-8DAB-444B-8D2B-9FEC99FDE97E_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="165.0" y="628.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="81.77142333984375" x="174.11428833007812" y="660.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58" id="sid-D98CA1EA-B636-4820-A6B1-0EB30D4EAD58_gui" isMarkerVisible="true">
            <omgdc:Bounds height="40.0" width="40.0" x="315.0" y="648.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-327EC495-8914-4A21-ADAC-F1FAD7887092" id="sid-327EC495-8914-4A21-ADAC-F1FAD7887092_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="525.0" y="584.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="24.0" width="66.34285736083984" x="541.8285713195801" y="610.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4" id="sid-F037662E-9F9C-4A83-8983-D7CB9480E7D4_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="525.0" y="684.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="87.94285583496094" x="531.0285720825195" y="716.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1" id="sid-A797A217-8B0E-42DB-BFEA-5483EEF4E8F1_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="675.0" y="684.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="75.5999984741211" x="687.2000007629395" y="716.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37" id="sid-A1C37ED6-44AB-4866-8FB6-5979E885ED37_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="894.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109" id="sid-B55FC456-F267-4CB5-8AEA-99F6FE0F2109_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="1245.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A1408C66-4C19-4A37-8540-567104D2E130" id="sid-A1408C66-4C19-4A37-8540-567104D2E130_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1320.0" y="684.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="75.5999984741211" x="1332.2000007629395" y="716.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809" id="sid-9472092E-BBE1-40FF-9FDB-045AF16A4809_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="675.0" y="584.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="24.0" width="82.5428466796875" x="683.7285766601562" y="610.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18" id="sid-1BC9BAA8-2DE9-4271-AC90-7F8DD5CC3A18_gui" isMarkerVisible="true">
            <omgdc:Bounds height="40.0" width="40.0" x="795.0" y="604.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C" id="sid-ACF947A1-FCB4-4B61-9763-0E830644DA4C_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="900.0" y="610.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067" id="sid-205147B9-D6C3-47DA-9FC4-5105BA84D067_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="1005.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490" id="sid-A6569A56-BF09-40A5-86E5-7B46BC22C490_gui">
            <omgdc:Bounds height="40.0" width="40.0" x="1530.0" y="704.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-71B26009-FA81-45D7-BDB5-866130BB228B" id="sid-71B26009-FA81-45D7-BDB5-866130BB228B_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="1635.0" y="710.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8" id="sid-4984CFA1-FED4-4A56-852B-99CB06E1AED8_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1110.0" y="825.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="69.42857360839844" x="1125.2857131958008" y="857.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E" id="sid-A464927F-E7DD-4477-AD50-9FFEA044C66E_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1110.0" y="1030.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="69.42857360839844" x="1125.2857131958008" y="1062.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-525E5320-6F72-493B-925C-8E48F82370D0" id="sid-525E5320-6F72-493B-925C-8E48F82370D0_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1110.0" y="1244.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="69.42857360839844" x="1125.2857131958008" y="1276.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-59E4ED9D-9819-4C53-A995-1DD50A733181" id="sid-59E4ED9D-9819-4C53-A995-1DD50A733181_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1111.2519166377645" y="397.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="12.0" width="82.5428466796875" x="1119.9804932979207" y="429.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548" id="sid-5E7CB1D0-1CE8-4C7A-924C-91B094EEC548_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="765.0" y="234.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
               <omgdc:Bounds height="24.0" width="53.22857666015625" x="788.3857116699219" y="260.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428" id="sid-B01A1ADA-82D5-4657-94EC-C6A222C31428_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="1011.0" y="260.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A" id="sid-AE885586-9954-4EDE-9CEF-B3004EEE904A_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="90.0" y="573.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="24.0" width="80.22856903076172" x="94.0" y="583.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25" id="sid-8762F92F-674A-41F1-BBC6-AEA0C86BFC25_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="345.0" y="573.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="12.0" width="81.77143096923828" x="349.0" y="589.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-86418154-10CC-467E-8430-C42FD1CB1D3B" id="sid-86418154-10CC-467E-8430-C42FD1CB1D3B_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="345.0" y="720.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="12.0" width="83.31428527832031" x="349.0" y="736.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-B151BF0C-60DF-4355-A78A-FF77621203FF" id="sid-B151BF0C-60DF-4355-A78A-FF77621203FF_gui">
            <omgdc:Bounds height="50.0" width="100.0" x="765.0" y="643.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
               <omgdc:Bounds height="24.0" width="77.14286041259766" x="769.0" y="653.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-D2A83D67-359A-4C2D-A4A5-EE6F61932675" id="sid-D2A83D67-359A-4C2D-A4A5-EE6F61932675_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="195.0" y="-776.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNEdge bpmnElement="sid-21E4C5C8-82A4-4952-8C9D-70541060233F" id="sid-21E4C5C8-82A4-4952-8C9D-70541060233F_gui">
            <omgdi:waypoint x="102.04225352112677" y="653.0"/>
            <omgdi:waypoint x="96.12676056338029" y="623.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34" id="sid-8E2778A9-A3D3-4C4A-B299-A145139C6C34_gui">
            <omgdi:waypoint x="265.0" y="668.207468879668"/>
            <omgdi:waypoint x="315.0" y="668.4149377593361"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-14AF078E-573F-408A-9626-5AF18B0E07E7" id="sid-14AF078E-573F-408A-9626-5AF18B0E07E7_gui">
            <omgdi:waypoint x="362.76487523992324" y="624.0"/>
            <omgdi:waypoint x="362.1439539347409" y="623.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-4320B584-2E94-4204-86BC-1BD71DC46E9C" id="sid-4320B584-2E94-4204-86BC-1BD71DC46E9C_gui">
            <omgdi:waypoint x="367.6663240131579" y="724.0"/>
            <omgdi:waypoint x="346.0" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978" id="sid-51D93441-5AA6-43E7-A3ED-A624D7D7E978_gui">
            <omgdi:waypoint x="625.0" y="724.0"/>
            <omgdi:waypoint x="675.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5" id="sid-B998E856-3794-4904-A0F3-EBA4B44F00F5_gui">
            <omgdi:waypoint x="335.5" y="648.0"/>
            <omgdi:waypoint x="335.5" y="624.0"/>
            <omgdi:waypoint x="525.0" y="624.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3" id="sid-00B34BAF-5A74-4B33-80CB-A83401EA4AD3_gui">
            <omgdi:waypoint x="775.0" y="724.0"/>
            <omgdi:waypoint x="894.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD" id="sid-FADD28D2-2309-42A4-B244-94DC3EC1D2DD_gui">
            <omgdi:waypoint x="625.0" y="624.0"/>
            <omgdi:waypoint x="675.0" y="624.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-3ABD36F7-7533-4333-8FFF-2725E5856D10" id="sid-3ABD36F7-7533-4333-8FFF-2725E5856D10_gui">
            <omgdi:waypoint x="775.0" y="624.2762430939226"/>
            <omgdi:waypoint x="795.0" y="624.3867403314918"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-3D647358-EF55-4CDA-BBDA-163463EA482E" id="sid-3D647358-EF55-4CDA-BBDA-163463EA482E_gui">
            <omgdi:waypoint x="815.4707560627675" y="604.0"/>
            <omgdi:waypoint x="815.0570613409415" y="314.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-F9C85FB5-89D7-460C-A3E0-382C8372B807" id="sid-F9C85FB5-89D7-460C-A3E0-382C8372B807_gui">
            <omgdi:waypoint x="795.0" y="642.10101010101"/>
            <omgdi:waypoint x="793.9529411764705" y="643.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9" id="sid-0363F126-7CBE-446D-B3BF-D36088DCA1E9_gui">
            <omgdi:waypoint x="865.0" y="274.0"/>
            <omgdi:waypoint x="1011.0" y="274.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-56F4AA87-A49C-480B-B396-5A3F402E35ED" id="sid-56F4AA87-A49C-480B-B396-5A3F402E35ED_gui">
            <omgdi:waypoint x="914.5" y="704.0"/>
            <omgdi:waypoint x="914.5" y="670.5"/>
            <omgdi:waypoint x="1161.2519166377645" y="670.5"/>
            <omgdi:waypoint x="1161.2519166377645" y="477.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743" id="sid-993C0662-7BC2-4E1E-8883-FDBDCE4FB743_gui">
            <omgdi:waypoint x="835.0" y="624.4010152284264"/>
            <omgdi:waypoint x="900.0" y="624.0710659898477"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2" id="sid-0C9BDA00-3D58-4BF1-92CB-3BBAA23124E2_gui">
            <omgdi:waypoint x="934.0" y="724.5"/>
            <omgdi:waypoint x="1005.0" y="724.5"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-C491E07D-4404-4A31-9739-640F2FDC1AE6" id="sid-C491E07D-4404-4A31-9739-640F2FDC1AE6_gui">
            <omgdi:waypoint x="1285.0" y="724.0"/>
            <omgdi:waypoint x="1320.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC" id="sid-27FED62E-5670-4C71-BA54-BF22B5A6EBCC_gui">
            <omgdi:waypoint x="1211.2519166377645" y="437.0"/>
            <omgdi:waypoint x="1550.5" y="437.0"/>
            <omgdi:waypoint x="1550.5" y="704.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-DE169EF5-BBB8-4FCD-B391-2B260C462507" id="sid-DE169EF5-BBB8-4FCD-B391-2B260C462507_gui">
            <omgdi:waypoint x="1420.0" y="724.0"/>
            <omgdi:waypoint x="1530.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE" id="sid-FBA447EE-B5AD-4F6E-9EEA-DAF25AA956AE_gui">
            <omgdi:waypoint x="1570.0" y="724.4010152284264"/>
            <omgdi:waypoint x="1635.0" y="724.0710659898477"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-13628390-9255-4FBD-BD5C-4F8B2E29197A" id="sid-13628390-9255-4FBD-BD5C-4F8B2E29197A_gui">
            <omgdi:waypoint x="1025.5" y="744.0"/>
            <omgdi:waypoint x="1025.5" y="1284.0"/>
            <omgdi:waypoint x="1110.0" y="1284.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7" id="sid-1DF703C6-BC48-4387-820C-CF1EC547F5D7_gui">
            <omgdi:waypoint x="1026.5" y="744.0"/>
            <omgdi:waypoint x="1026.5" y="1070.0"/>
            <omgdi:waypoint x="1110.0" y="1070.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-EC39B233-C77C-4B84-81A8-F43E9D138970" id="sid-EC39B233-C77C-4B84-81A8-F43E9D138970_gui">
            <omgdi:waypoint x="1025.5" y="744.0"/>
            <omgdi:waypoint x="1025.5" y="865.0"/>
            <omgdi:waypoint x="1110.0" y="865.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455" id="sid-6671AD7F-B64F-4E4C-8B2C-50AF96CDB455_gui">
            <omgdi:waypoint x="1210.0" y="1284.0"/>
            <omgdi:waypoint x="1266.0" y="1284.0"/>
            <omgdi:waypoint x="1266.0" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-5A4AAD89-453E-4AA7-A286-83654280D5E7" id="sid-5A4AAD89-453E-4AA7-A286-83654280D5E7_gui">
            <omgdi:waypoint x="1210.0" y="1070.0"/>
            <omgdi:waypoint x="1264.0" y="1070.0"/>
            <omgdi:waypoint x="1264.0" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0" id="sid-45B0DD5B-05B3-471E-8BC6-995758D42BC0_gui">
            <omgdi:waypoint x="1210.0" y="865.0"/>
            <omgdi:waypoint x="1265.5" y="865.0"/>
            <omgdi:waypoint x="1265.5" y="744.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-F9D2304D-027C-473B-9629-EE534F7CB963" id="sid-F9D2304D-027C-473B-9629-EE534F7CB963_gui">
            <omgdi:waypoint x="335.5" y="688.0"/>
            <omgdi:waypoint x="335.5" y="724.0"/>
            <omgdi:waypoint x="525.0" y="724.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-E180DA97-E03D-41B1-825C-5640B1343ABD" id="sid-E180DA97-E03D-41B1-825C-5640B1343ABD_gui">
            <omgdi:waypoint x="120.0" y="666.7511391044501"/>
            <omgdi:waypoint x="165.0" y="666.7511391044501"/>
         </bpmndi:BPMNEdge>
      </bpmndi:BPMNPlane>
      <bpmndi:BPMNLabelStyle id="sid-513284be-f103-4ba2-ba64-2285a0e00c6a">
         <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="11.0"/>
      </bpmndi:BPMNLabelStyle>
      <bpmndi:BPMNLabelStyle id="sid-76d9330e-14a4-4bbb-83a1-45a6c2f8a30d">
         <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="12.0"/>
      </bpmndi:BPMNLabelStyle>
   </bpmndi:BPMNDiagram>
</definitions>`,
        diagram_name: 'First BPMN Diagram',
        diagram_description: 'string',
        file_urls: ['string'],
    },
];
