import React from "react";
import {ProCard} from "@ant-design/pro-components";
import DorisFeComponent from "@/pages/Project/Workspace/Doris/Template/Steps/Component/DorisFeComponent";
import DorisAdminUser from "@/pages/Project/Workspace/Doris/Template/Steps/Component/DorisAdminUser";
import DorisBeComponent from "@/pages/Project/Workspace/Doris/Template/Steps/Component/DorisBeComponent";
import DorisCnComponent from "@/pages/Project/Workspace/Doris/Template/Steps/Component/DorisCnComponent";

const DorisTemplateComponent: React.FC = () => {
  return (
    <ProCard>
      <DorisAdminUser/>
      <DorisFeComponent/>
      <DorisBeComponent/>
      <DorisCnComponent/>
    </ProCard>
  );
}

export default DorisTemplateComponent;
