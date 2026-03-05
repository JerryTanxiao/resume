const projectData = {
    'ddms': {
        title: 'DDMS AI 配送管理 SaaS (2.0 AI版)',
        tech: 'Java 21 / Spring Cloud Alibaba / Netty / RocketMQ / MongoDB',
        desc: `面向同城即时配送的 AI 驱动多租户 SaaS 平台，覆盖 180+ 区域代理商，集成京东、美团订单分发，日订单规模 10w+。<br><br>
               <strong>核心亮点：</strong><br>
               • 落地千万级轨迹消息积压深度治理（1000w/5min），通过建立隔离转储 Topic 与 16 路 Queue 实现线性扩容。<br>
               • 部署 AI Agent 辅助运营，将 80% 人工重复咨询自动化，显著降低成本。<br>
               • 基于 Seata 保障 180+ 租户的分布式财务对账零误差。`
    },
    'dow': {
        title: 'DOW 供应链智能助手框架 (AI 核心研发)',
        tech: 'Python / FastAPI / Dify Agent / PAD 协议 / Redis / FFmpeg',
        desc: `自主研发的高性能机器人集成框架，具备双协议长连接与多模态交互能力，深度赋能配送体系。<br><br>
               <strong>核心亮点：</strong><br>
               • 自研 HTTP POST 回调机制替代传统轮询，降低 60% 服务器负载，实现消息毫秒级响应。<br>
               • 深度集成 Dify API，支持 GPT/Claude 动态切换，落地 RAG 知识库辅助业务答疑。<br>
               • 基于 FFmpeg 实现语音消息自动识别与 TTS 情感化答复，能效提升 30%。<br>
               • 插件化管理系统，支持插件热重载与自动化朋友圈/任务处理。`
    },
    'mangaflow': {
        title: 'MangaFlow AI — 小说分镜全流程助手',
        tech: 'React 19 / TypeScript / Google Gemini SDK / AIGC / Tailwind',
        desc: `针对漫剧生产设计的全链路 AIGC 工业化助手，实现从文学文本向制作级视觉描述全自动流转。<br><br>
               <strong>核心亮点：</strong><br>
               • 设计“灵感 -> 小说 -> 脚本 -> 分镜”的生成闭环，自动提取场景、动作与对白。<br>
               • 自研 8 维度结构化提示词引擎，支持专业景别、镜头运用等指令输出。<br>
               • 锁定角色一致性特征，输出不同艺术风格（电影感、水墨等）的视觉指令。`
    },
    'kkb': {
        title: '客客帮 —— 话费权益订单全链路风控系统',
        tech: 'Java 17 / Spring Cloud / Redis / RocketMQ / Feign',
        desc: `支撑千万级话费/权益卡代充业务的全链路风控，保障平台交易安全。<br><br>
               <strong>核心亮点：</strong><br>
               • 主导动态风控策略引擎，实现根据交易频率等指标的阶梯式额度管控。<br>
               • 实现自动化处罚中心，对高风险账号进行实时权限剥夺，准确率达 99.9%。<br>
               • 针对风控指标大表统计，设计多级缓存与 SQL 调优，提升校验性能 60%。`
    },
    'zhongtai': {
        title: '深能环保数智中台 (数智中心)',
        tech: 'Flink / MySQL 调优 / DataWorks / SQL 物理优化',
        desc: `WIS 交易/分析数据分离及全量流批一体计算底座建设，聚焦指标定义与实时计算。<br><br>
               <strong>核心亮点：</strong><br>
               • 主导设计动态多指标计算合并算法，实现拖拽式自动转换 Flink 任务。<br>
               • 解决 Flink 数据漂移难题，优化作业 CU 调度逻辑保障数据一致性。<br>
               • 针对 MySQL 视图索引下推失效，深度优化 SQL 物理计划，由 300s 降至 1s。`
    },
    'wuwei': {
        title: '无为教育 —— 金融教育信息化系统',
        tech: 'RocketMQ 源码 / 时间轮 / 微服务治理 / 直播架构',
        desc: `支撑 10w+ 在线直播的高并发教育平台，保障 10 亿级营收业务稳定性。<br><br>
               <strong>核心亮点：</strong><br>
               • 主导高并发直播系统建设，实现百万级订单转化预测与实时转单埋点。<br>
               • 基于时间轮算法对 RocketMQ 进行源码级二次开发，实现私有化自定义延迟队列。<br>
               • 主导单体向微服务剥离，实现小程序到支付的自动化平滑切换，提升流水化部署效率。`
    },
    'xiudian': {
        title: '咻电员工管理 & 商城 SaaS 系统',
        tech: 'Netty / Protobuf / 纠偏算法 / IoT 轨迹处理',
        desc: `主导千万级 MQ 轨迹积压治理与高并发 IoT 位置服务架构。<br><br>
               <strong>核心亮点：</strong><br>
               • 通过隔离 Topic 与 16 路 Queue 线性分摊压力，彻底解决 1000w 轨迹洪水导致的 OOM。<br>
               • 独立实现每日 50w 级工单自动派发机制，减少 80% 人工干预。<br>
               • 基于 Netty + Protobuf 压缩 70% 带宽，引入纠偏算法将轨迹误差控制在米级。`
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation
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
    reveal(); // Initial check

    // Project Modal Logic
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
                document.body.style.overflow = 'hidden'; // Prevent scrolling
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

    // Ripple Effect
    const ripples = document.querySelectorAll('.ripple');
    ripples.forEach(button => {
        button.addEventListener('click', function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            let ripple = document.createElement('span');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
