<div align="center"><a name="readme-top"></a>

# Smarter Spaces Solutions
*Maker the space a better world*

Smarter Spaces Solutions is an open-source initiative aimed at creating unlimited scenarios for smarter spaces. Focused on areas such as elder care, child-friendly environments, and animal welfare, the project leverages innovative technologies to redefine intelligent spaces.

智能空间解决方案是一个开源项目，旨在为智能空间创造无限场景。专注于养老、儿童友好环境和动物福利等领域，项目利用创新技术重新定义智能空间。

![avatar](https://github.com/Seeed-Studio/Smarter-Spaces-Solutions/blob/main/flowchart.png?raw=true)

## Architecture 架构

At the edge, cameras and sensors cover security, microclimate, community garden conditions, and people/pet presence, feeding a Node-RED hub (**Mission Pack**) over RTSP, LoRaWAN (Chirp Stack), and Meshtastic mesh networking — the integration point that turns raw signals into real-world data for the rest of the system.

在边缘层，摄像头与传感器覆盖安防、微气候、社区花园环境、人员与宠物位置，通过 RTSP、LoRaWAN（Chirp Stack）和 Meshtastic 网络把数据汇入以 Node-RED 为中心的枢纽（**Mission Pack**）——这是把原始信号转化为真实世界数据的整合层。

**Home Assistant Green** handles automation: access control and other smart home devices, plus the electrical cabinet via a Xiao Relay, exposing a standard data interface back to Mission Pack.

**Home Assistant Green** 负责自动化层：门禁与其它智能家居设备，以及通过 Xiao Relay 联动的电气柜，并向 Mission Pack 暴露标准数据接口。

On top, an LLM-based **Watcher** acts as a physical agent — understanding intent through natural language and vision, and providing a care interface for daily-living needs. This is where the elder-care, child-friendly, and animal-welfare focus areas actually plug in.

在最上层，基于 LLM 的 **Watcher** 作为物理 Agent，以自然语言和视觉理解意图，为日常生活起居需求提供关怀界面——养老、儿童友好、动物福利这些聚焦领域正是在这一层落地。

## Solutions 方案

Solutions collected by area, each covering the problem it solves, what it's composed of, and real-world results.

按领域收录的解决方案，每个方案是要解决的问题 + 方案组成 + 落地效果：

- [Elder Care 养老](./docs/elder-care/)
- [Child-Friendly 儿童友好](./docs/child-friendly/)
- [Animal Welfare 动物福利](./docs/animal-welfare/)

For background reading and external reference cases, see [case_study](./case_study/).

参考资料 / 可借鉴的外部案例见 [case_study](./case_study/)。

## How to Contribute 如何参与

Two paths: **propose a solution**, or **claim a need published by a maintainer**. See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

两条路径：**提案新方案**，或者**认领维护者发布的需求**。具体步骤见 [CONTRIBUTING.md](./CONTRIBUTING.md)。
