const projectData = {
    'ddms': {
        title: 'DDMS 智能配送管理 SaaS (2.0 AI版)',
        tech: 'Java 21 / Spring Cloud Alibaba 2023 / Netty / AliCloud RocketMQ / LiteFlow / MongoDB / Python FastAPI',
        desc: `面向同城即时配送的 AI 驱动多租户 SaaS 平台，已覆盖 180+ 区域代理商，深度集成京东秒送、美团外卖、淘宝订单分发接口，日订单规模 10w+。<br><br>
               <strong>核心亮点：</strong><br>
               • **AI Agent 辅助运营实战**：通过 Dify+RAG 落地智能助手，将人工重复咨询自动化，显著降低运营成本。<br>
               • **IoT 轨迹纠偏与高频接入**：利用 Netty+Protobuf 实现高频点位上报，针对基站切换导致的轨迹分叉，引入经纬度压缩平滑算法，解决米级偏差问题。<br>
               • **高并发链路性能调优**：针对上游 5,000 QPS 峰值压力，主导基于 CompletableFuture 的并行 RPC 与异步持久化改造，将接口响应从 1.3s 降至 150ms 内。<br>
               • **多平台适配接入**：采用策略模式 + 适配器模式封装京东、美团、淘宝等三方配送平台 API，接入效率提升 70%。<br>
               • **高可靠调度体系**：基于 Redisson 分布式锁与 RocketMQ 顺序消息，确保分布式环境下订单状态流转的严谨序性。`
    },
    'dow': {
        title: 'DOW 供应链智能助手框架 (AI 核心研发)',
        tech: 'Python / FastAPI / Dify Agent / Redis / FFmpeg / Docker',
        desc: `自研的高性能机器人集成框架，具备双协议长连接与多模态交互能力。实现全自动智能运营。<br><br>
               <strong>核心亮点：</strong><br>
               • **高效回调机制设计**：自研 HTTP POST 回调机制替代传统轮询，降低 60% 服务器负载，实现消息毫秒级响应。<br>
               • **Dify Agent 深度集成**：利用 Dify API 实现工具调用（Function Calling），支持 GPT/Claude 动态切换。<br>
               • **多模态消息处理**：基于 FFmpeg 实现语音消息自动识别与 TTS 情感化答复；支持图文多轮对话理解，能效提升 30%。<br>
               • **插件化管理系统**：支持插件动态挂载与热重载，具备完善的联系人、朋友圈及自动化任务治理能力。`
    },
    'mangaflow': {
        title: '小说/动漫分镜全流程助手 (AIGC)',
        tech: 'React 19 / TypeScript / Vite / Google Gemini SDK / AIGC / Tailwind CSS',
        desc: `针对漫剧（Manga-Drama）生产设计的全链路 AIGC 工业化助手。实现从灵感文学向制作级视觉描述全自动流转。<br><br>
               <strong>核心亮点：</strong><br>
               • **全链路 AIGC 工作流编排**：设计文学文本向视觉制作脚本的自动转化算法，「灵感 -> 小说 -> 脚本 -> 分镜」生成闭环。<br>
               • **工业化结构化 Prompt 设计**：自研 8 维度提示词生成引擎，支持 [景别] | [人物] | [镜头运用] | [视觉质感] 等专业指令。<br>
               • **多模态一致性控制**：锁定角色外貌特征并输出不同艺术风格（电影感、水墨、霓虹等）的视觉指令. `
    },
    'kkb': {
        title: '客客帮 —— 话费权益订单全链路风控系统',
        tech: 'Java 17 / Spring Cloud / Redis / RocketMQ / MySQL / MyBatis-Plus / Dynamic-Datasource',
        desc: `支撑千万级话费/权益卡代充业务的全链路风控，保障平台交易安全。<br><br>
               <strong>核心亮点：</strong><br>
               • **动态风控引擎**：基于阶梯式额度管控，实现自动化处罚对高风险账号实时权限剥夺，准确率 99.9%。<br>
               • **MQ 消费者治理**：实现 Consumer 实例的自动创建与 Topic 动态绑定，支持业务流量平滑切流与零配置上线。<br>
               • **多数据源路由**：基于 MyBatis-Plus + Dynamic-Datasource 实现核心库与分治库的动态权重分配与读写分离。`
    },
    'zhongtai': {
        title: '道衍运算 —— 深能环保数智中台 (数智中心)',
        tech: 'Flink / MySQL 物理优化 / DataWorks / 实时计算 / DataX / DolphinScheduler',
        desc: `WIS 交易/分析数据分离及全量流批一体计算底座建设，聚焦指标定义与实时计算看板。<br><br>
               <strong>核心亮点：</strong><br>
               • **指标中心算法设计**：主导设计动态多指标计算合并算法，实现拖拽式自动转换 SQL/Flink 任务。<br>
               • **Flink 数据漂移与负载优化**：针对 CU 过高导致的调度延迟，通过任务频率平滑处理与批处理优化，保障数据一致性。<br>
               • **MySQL 物理计划优化**：将 300s 慢查询降至 1s，优化 SQL 物理计划，解决 MySQL 8.0 视图索引下推失效问题。`
    },
    'wuwei': {
        title: '金融教育信息化系统 (1亿级营收支撑)',
        tech: 'RocketMQ 源码 / 时间轮算法 / 微服务治理 / 10w+ 直播架构 / JProfiler',
        desc: `支撑 10w+ 在线直播的高并发教育平台，保障 1 亿级营收业务稳定性。<br><br>
               <strong>核心亮点：</strong><br>
               • **10w+ 级直播架构**：支撑 10w+ 实时观看及 100w 订单转化预测，提升人效由 0.8 LRO 至 1.5 LRO。<br>
               • **RocketMQ 源码开发**：利用时间轮算法对开源版进行二次开发，实现自主可控的自定义延迟队列。<br>
               • **架构治理**：主导从 CRM 到微服务架构的剥离，实现从单体到微服务的演进。`
    },
    'xiudian': {
        title: '咻电员工管理 & 商城 SaaS 系统',
        tech: 'Netty / Protobuf / 纠偏算法 / IoT 轨迹处理 / JVM 调优 / Kettle',
        desc: `主导千万级 MQ 轨迹积压治理与高并发 IoT 位置服务架构。<br><br>
               <strong>核心亮点：</strong><br>
               • **千万级 MQ 积压治理**：通过建立隔离 Topic 与 16 路 Queue 线性分摊压力，彻底解决 1000w 轨迹洪水导致的 OOM。<br>
               • **高频 IoT 纠偏优化**：基于 Netty+Protobuf 压缩 70% 带宽，引入经纬度平滑纠偏算法将轨迹误差控制在米级。<br>
               • **业务自动化**：独立实现每日 50w 级工单自动派发机制，减少 80% 人工干预. `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.fade-in');
    
    const reveal = () => {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal();

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const cards = document.querySelectorAll('.project-card');
    const closeBtn = document.querySelector('.close-modal');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const data = projectData[projectId];
            if (data) {
                modalBody.innerHTML = `
                    <div class="modal-header">
                        <h2>${data.title}</h2>
                        <div class="tech-stack">${data.tech.split(' / ').map(t => `<span>${t}</span>`).join('')}</div>
                    </div>
                    <div class="modal-description">
                        ${data.desc}
                    </div>
                `;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    const ripples = document.querySelectorAll('.ripple');
    ripples.forEach(button => {
        button.addEventListener('click', function(e) {
            let rect = e.target.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            let ripple = document.createElement('span');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
});
