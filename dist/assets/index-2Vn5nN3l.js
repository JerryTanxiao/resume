(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const b={ddms:{title:"DDMS 智能配送管理 SaaS (2.0 AI版)",tech:"Java 21 / Spring Cloud Alibaba 2023 / Netty / RocketMQ / LiteFlow / MongoDB / Python FastAPI",desc:`面向同城即时配送的 AI 驱动多租户 SaaS 平台，已覆盖 180+ 区域代理商，集成京东、美团订单分发，日订单规模 10w+。<br><br>
               <strong>核心亮点：</strong><br>
               • **AI Agent 辅助运营**：通过 Dify+RAG 落地智能助手，将原本 80% 的人工重复咨询自动化，显著降低运营成本。<br>
               • **IoT 轨迹纠偏与高频接入**：利用 Netty+Protobuf 实现高频点位上报，针对基站切换导致的轨迹分叉，引入经纬度压缩平滑算法，解决米级偏差问题。<br>
               • **复杂代理结算机制**：主导 180+ 区域代理商的分布式结账系统，利用 Seata 保障跨租户、跨账期的财务对账零误差。`},dow:{title:"DOW 供应链智能助手框架 (AI 核心研发)",tech:"Python / FastAPI / Dify Agent / PAD Protocol / Redis / FFmpeg / Docker",desc:`自主研发的高性能机器人集成框架，具备双协议长连接与多模态交互能力。实现全自动智能运营。<br><br>
               <strong>核心亮点：</strong><br>
               • **高效回调机制设计**：自研 HTTP POST 回调机制替代传统轮询，降低 60% 服务器负载，实现消息毫秒级响应。<br>
               • **Dify Agent 深度集成**：利用 Dify API 实现工具调用（Function Calling），支持 GPT/Claude 动态切换。<br>
               • **多模态消息处理**：基于 FFmpeg 实现语音消息自动识别与 TTS 情感化答复；支持图文多轮对话理解。`},mangaflow:{title:"小说/动漫分镜全流程助手 (AIGC)",tech:"React 19 / TypeScript / Vite / Google Gemini SDK / AIGC / Tailwind CSS",desc:`针对漫剧（Manga-Drama）生产设计的全链路 AIGC 工业化助手。实现从灵感文学向制作级视觉描述全自动流转。<br><br>
               <strong>核心亮点：</strong><br>
               • **全链路 AIGC 工作流**：设计文学文本向视觉制作脚本的自动转化算法，「灵感 -> 小说 -> 脚本 -> 分镜」生成闭环。<br>
               • **工业化结构化 Prompt**：自研 8 维度提示词生成引擎，支持 [景别] | [人物] | [镜头运用] | [视觉质感] 等专业指令。<br>
               • **多模态一致性控制**：锁定角色外貌特征并输出不同艺术风格（电影感、水墨、霓虹等）的视觉指令. `},kkb:{title:"客客帮 —— 话费权益订单全链路风控系统",tech:"Java 17 / Spring Cloud / Redis / RocketMQ / MySQL / MyBatis-Plus / Dynamic-Datasource",desc:`支撑千万级话费/权益卡代充业务的全链路风控，保障平台交易安全。<br><br>
               <strong>核心亮点：</strong><br>
               • **动态风控引擎**：基于阶梯式额度管控，实现自动化处罚对高风险账号实时权限剥夺，准确率 99.9%。<br>
               • **MQ 消费者治理**：实现 Consumer 实例的自动创建与 Topic 动态绑定，支持业务流量平滑切流与零配置上线。<br>
               • **多数据源路由**：基于 MyBatis-Plus + Dynamic-Datasource 实现核心库与分治库的动态权重分配与读写分离。`},zhongtai:{title:"深能环保数智中台 (数智中心)",tech:"Flink / MySQL 物理优化 / DataWorks / 实时计算 / DataX / DolphinScheduler",desc:`WIS 交易/分析数据分离及全量流批一体计算底座建设，聚焦指标定义与实时计算看板。<br><br>
               <strong>核心亮点：</strong><br>
               • **指标中心算法设计**：主导设计动态多指标计算合并算法，实现拖拽式自动转换 SQL/Flink 任务。<br>
               • **Flink 数据漂移与负载优化**：针对 CU 过高导致的调度延迟，通过任务频率平滑处理与批处理优化，保障数据一致性。<br>
               • **MySQL 物理计划优化**：深度优化 SQL 执行计划，将 300s 慢查询由降至 1s。`},wuwei:{title:"无为教育 —— 金融教育信息化系统",tech:"RocketMQ 源码 / 时间轮算法 / 微服务治理 / 10w+ 直播架构 / JProfiler",desc:`支撑 10w+ 在线直播的高并发教育平台，保障 1 亿级营收业务稳定性。<br><br>
               <strong>核心亮点：</strong><br>
               • **10w+ 级直播架构**：支撑 10w+ 实时观看及 100w 订单转化预测，提升人效由 0.8 LRO 至 1.5 LRO。<br>
               • **RocketMQ 源码开发**：利用时间轮算法对开源版进行二次开发，实现自主可控的自定义延迟队列。<br>
               • **架构治理**：主导单体向微服务剥离，实现小程序到支付的自动化平滑切换。`},xiudian:{title:"咻电员工管理 & 商城 SaaS 系统",tech:"Netty / Protobuf / 纠偏算法 / IoT 轨迹处理 / JVM 调优 / Kettle",desc:`主导千万级 MQ 轨迹积压治理与高并发 IoT 位置服务架构。<br><br>
               <strong>核心亮点：</strong><br>
               • **千万级 MQ 积压治理**：通过建立隔离 Topic 与 16 路 Queue 线性分摊压力，彻底解决 1000w 轨迹洪水导致的 OOM。<br>
               • **高频 IoT 纠偏优化**：基于 Netty+Protobuf 压缩 70% 带宽，引入经纬度平滑纠偏算法将轨迹误差控制在米级。<br>
               • **业务自动化**：独立实现每日 50w 级工单自动派发机制，减少 80% 人工干预。`}};document.addEventListener("DOMContentLoaded",()=>{const u=document.querySelectorAll(".fade-in"),i=()=>{u.forEach(o=>{const n=window.innerHeight;o.getBoundingClientRect().top<n-150&&o.classList.add("active")})};window.addEventListener("scroll",i),i();const s=document.getElementById("project-modal"),d=document.getElementById("modal-body"),e=document.querySelectorAll(".project-card"),t=document.querySelector(".close-modal");e.forEach(o=>{o.addEventListener("click",()=>{const n=o.getAttribute("data-project"),r=b[n];r&&(d.innerHTML=`
                    <div class="modal-header">
                        <h2>${r.title}</h2>
                        <div class="tech-stack">${r.tech.split(" / ").map(a=>`<span>${a}</span>`).join("")}</div>
                    </div>
                    <div class="modal-description">
                        ${r.desc}
                    </div>
                `,s.style.display="block",document.body.style.overflow="hidden")})});const c=()=>{s.style.display="none",document.body.style.overflow="auto"};t.addEventListener("click",c),window.addEventListener("click",o=>{o.target===s&&c()}),document.querySelectorAll(".ripple").forEach(o=>{o.addEventListener("click",function(n){let r=n.target.getBoundingClientRect(),a=n.clientX-r.left,p=n.clientY-r.top,l=document.createElement("span");l.style.left=a+"px",l.style.top=p+"px",l.classList.add("ripple-effect"),this.appendChild(l),setTimeout(()=>l.remove(),600)})})});
