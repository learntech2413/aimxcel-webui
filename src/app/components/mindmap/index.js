import * as React from "react";
import {
    MindMap as MindMapModule, ConnectorConstraints, PointPort, SnapConstraints, PortVisibility, DiagramComponent, NodeConstraints, Inject, DataBinding
} from "@syncfusion/ej2-react-diagrams";
import { SampleBase } from './sample-base';
import { DataManager, Query } from "@syncfusion/ej2-data";

let diagramInstance;
class MindMap extends SampleBase {    
    rendereComplete() {
       !!diagramInstance && diagramInstance.fitToPage();
    }

    render() {
        let { dataSource } = this.props;
        console.log(dataSource)
        let items = new DataManager(JSON.parse(dataSource), new Query().take(7));
        return (<div className="control-pane">
            <div className="control-section">
                <div className="content-wrapper" style={{ width: "100%",textAlign:"center" }}>
                    <DiagramComponent ref={diagram => (diagramInstance = diagram)}
                        id="diagram" width={"100%"} height={"550px"} snapSettings={{ constraints: SnapConstraints.None }}
                        layout={{
                            type: "MindMap",
                            getBranch: (node, nodes) => {
                                return node.data.branch;
                            },
                            horizontalSpacing: 50

                        }}
                        dataSourceSettings={{
                            id: "id",
                            parentId: "parentId",
                            dataSource: items,
                            root: String(1)
                        }}
                        scrollSettings={
                            {
                               // horizontalOffset: 50,
                                verticalOffset: 50,
                              //  padding: { left: 200, top: 50 }
                            }
                        }
                        //sets node default value
                        getNodeDefaults={(obj) => {
                            obj.height = 40;
                            obj.width = 100;
                            obj.constraints =
                                NodeConstraints.None;
                            if (obj.data.branch === "Left" ||
                                obj.data.branch === "Right" ||
                                obj.data.branch === "Root") {
                                obj.shape = { type: "Basic", shape: "Rectangle" };
                                obj.borderColor =
                                    "red";
                                obj.style = {
                                    fill: obj.data.fill,
                                    strokeColor: "none",
                                    strokeWidth: 2
                                };
                                obj.annotations = [
                                    {
                                        content: obj.data.Label,
                                        margin: { left: 5, right: 5, top: 5, bottom: 5 },
                                        style: { color: "white" }
                                    }
                                ];
                                let port = getPort();
                                for (let i = 0; i < port.length; i++) {
                                    obj.ports.push(new PointPort(obj, "ports", port[i], true));
                                }
                            }
                            else {
                               
                                obj.shape = { type: "Basic", shape: "Rectangle" };
                                obj.borderColor =
                                    "red"; /* tslint:disable:no-string-literal */
                                obj.style = {
                                    fill: obj.data.fill,
                                    strokeColor: "none",
                                    strokeWidth: 2
                                };
                                obj.annotations = [
                                    {
                                        content: obj.data.Label,
                                        margin: { left: 5, right: 5, top: 5, bottom: 5 },
                                        style: { color: "white" }
                                    }
                                ];
                                let port = getPort();
                                for (let i = 0; i < port.length; i++) {
                                    obj.ports.push(new PointPort(obj, "ports", port[i], true));
                                }

                            }
                            return obj;
                        }}
                        //sets connector default value
                        getConnectorDefaults={(connector, diagram) => {
                            connector.type = "Orthogonal";
                            connector.constraints = ConnectorConstraints.None;
                            connector.targetDecorator = { shape: "Rectangle" };
                            let sourceNode = diagram.getObject(connector.sourceID);
                            let targetNode = diagram.getObject(connector.targetID);
                            if (targetNode.data.branch === "Right" ||
                                targetNode.data.branch === "subRight") {
                                connector.sourcePortID = sourceNode.ports[0].id;
                                connector.targetPortID = targetNode.ports[1].id;
                                connector.style = { strokeWidth: 1, strokeColor: "#6E6867" };
                            }
                            else if (targetNode.data.branch === "Left" ||
                                targetNode.data.branch === "subLeft") {
                                connector.sourcePortID = sourceNode.ports[1].id;
                                connector.targetPortID = targetNode.ports[0].id;
                                connector.style = { strokeWidth: 1, strokeColor: "#6E6867" };
                            }
                            return connector;
                        }}



                    >
                        <Inject services={[DataBinding, MindMapModule]} />
                    </DiagramComponent>
                    <input id="palette" style={{ visibility: "hidden", position: "absolute" }} type="color" name="favcolor" value="#000000" />
                </div>
            </div>
        </div>);
    }
}
//creation of the Ports
function getPort() {
    let port = [
        {
            id: "port1",
            offset: { x: 0, y: 0.5 },
            visibility: PortVisibility.Hidden,
            style: { fill: "black" }
        },
        {
            id: "port2",
            offset: { x: 1, y: 0.5 },
            visibility: PortVisibility.Hidden,
            style: { fill: "black" }
        }
    ];
    return port;
}


export default MindMap;