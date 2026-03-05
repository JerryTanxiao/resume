document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal animation on scroll with staggered effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section, .glass-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 1s cubic-bezier(0.19, 1, 0.22, 1)';
        observer.observe(el);
    });

    // 2. Cursor Follower Blob with smooth lag
    const blob = document.querySelector('.cursor-blob');
    let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        curX += (mouseX - curX) * 0.1;
        curY += (mouseY - curY) * 0.1;
        if (blob) {
            blob.style.transform = `translate(${curX - 200}px, ${curY - 200}px)`;
        }
        requestAnimationFrame(animate);
    }
    animate();

    // 3. Project Modal Interaction
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');

    const projectData = {
        ddms: {
            title: "DDMS 智能配送管理 SaaS (2.0 AI版)",
            desc: "已覆盖 **180 个区域代理商**。除高并发订单分发外，重点落地了 **AI Agent** 辅助运营与全链路消息积压深度治理方案。",
            tech: ["Java 21", "AI Agent", "AliCloud MQ", "Netty", "Seata"],
            details: `
                <div class="modal-detail-grid">
                    <div class="detail-item">
                        <h4>AI Agent 与钉钉机器人应用</h4>
                        <p>落地 Dify + RAG 架构实现钉钉助手，处理 80% 运营咨询；通过 AI 预测运力缺口，能效提升 30%。</p>
                    </div>
                    <div class="detail-item">
                        <h4>千万级消息积压治理</h4>
                        <p>处理每 5 分钟 1000w 条轨迹点位堆积难题。通过多 Consumer 线性扩容、新建 Topic 物理转储（16 个队列）彻底解决系统崩溃风险。</p>
                    </div>
                    <div class="detail-item">
                        <h4>高并发轨迹接入 (Netty+Protobuf)</h4>
                        <p>Netty 实现多端异构服务轨迹接入。引入 **经纬度压缩平滑纠偏算法** 解决基站信号波动导致的轨迹分叉误差。</p>
                    </div>
                </div>
            `
        },
        kkb: {
            title: "话费权益订单全链路风控系统",
            desc: "主导千万级业务流量下的多租户架构。基于 7 日交易频率实现 5 级动态评级引擎。",
            tech: ["Risk Engine", "Redis", "Fegin", "SkyWalking"],
            details: `
                <div class="modal-detail-grid">
                    <div class="detail-item">
                        <h4>动态评分与秒级处罚</h4>
                        <p>风控预警触发后，秒级联动权限中心执行锁定账号、限制登录、限制提现等自动化处罚逻辑，准确率 99.9%。</p>
                    </div>
                    <div class="detail-item">
                        <h4>全链路指标监控</h4>
                        <p>实时监测假充率、30 天投诉率等核心业务指标，异常发现延时降至秒级。</p>
                    </div>
                </div>
            `
        },
        zhongtai: {
            title: "深能环保数智中台 (数智中心)",
            desc: "技术负责人（带领 10 人小组）。攻克 WIS 交易型数据分离与指标计算下推调优难题。",
            tech: ["Flink", "MySQL 调优", "DataWorks", "DolphinScheduler"],
            details: `
                <div class="modal-detail-grid">
                    <div class="detail-item">
                        <h4>SQL 指标下推与 Flink 调优</h4>
                        <p>解决 MySQL 8.0 视图索引下推失效问题，将 300s 慢查询降至 1s；治理 Flink CU 过高导致的数据漂移偏差。</p>
                    </div>
                    <div class="detail-item">
                        <h4>千万级维度反向检索</h4>
                        <p>设计热处理、规则池及热缓存命中机制，实现从 1000w 级维度值中秒级精准定位关联指标。</p>
                    </div>
                </div>
            `
        },
        wuwei: {
            title: "无为教育金融信息化系统 (10亿级营收支撑)",
            desc: "技术组长（管理 15+ 团队）。利用 **时间轮算法** 对 RocketMQ 进行了源码级二次开发，实现自主可控的延迟队列。",
            tech: ["RocketMQ 源码开发", "时间轮算法", "JProfiler", "Python 自动化", "10w+ 在线直播"],
            details: `
                <div class="modal-detail-grid">
                    <div class="detail-item">
                        <h4>RocketMQ 源码级自定义</h4>
                        <p>针对私有化环境与商业版成本限制，基于时间轮原理重写延迟消息逻辑，完美解决业务溯源与环境部署难题。</p>
                    </div>
                    <div class="detail-item">
                        <h4>10w+ 并发直播系统</h4>
                        <p>支持 10w+ 在线聊天、百万级直播回放及实时转单分析，将运营人效（LRO）从 0.8 提升至 1.5。</p>
                    </div>
                </div>
            `
        },
        xiudian: {
            title: "咻电员工管理 & 商城 SaaS 生态",
            desc: "技术组长。主导千万级 MQ 积压专项治理，确保高并发 IoT 核心业务与自动清分系统的稳定性。",
            tech: ["Netty", "Protobuf", "AliCloud MQ", "轨迹纠偏"],
            details: `
                <div class="modal-detail-grid">
                    <div class="detail-item">
                        <h4>1000w MQ 积压专项治理</h4>
                        <p>针对突发流量导致的系统崩溃，通过建立物理转储 Topic、扩容 16 路独立 MQ 队列线性分摊压力，彻底解决 OOM 问题。</p>
                    </div>
                    <div class="detail-item">
                        <h4>高并发 IoT 位置轨迹服务</h4>
                        <p>基于 Netty + Protobuf 实现。针对边缘信号引入 **经纬度压缩平滑纠偏算法**，精准纠偏轨迹分叉难题。</p>
                    </div>
                </div>
            `
        }
    };

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault(); // Ensure it doesn't navigate if it's an 'a' tag
            const pid = card.getAttribute('data-project');
            const data = projectData[pid];
            if (!data) return;

            modalBody.innerHTML = `
                <h2 style="color: var(--primary-color); margin-bottom: 1rem;">${data.title}</h2>
                <div class="modal-tech-stack" style="margin-bottom: 2rem;">
                    ${data.tech.map(t => `<span class="badge" style="margin-right: 0.5rem; margin-bottom: 0.5rem; background: rgba(0,242,255,0.1); border: 1px solid var(--primary-color); padding: 2px 8px; border-radius: 4px;">${t}</span>`).join('')}
                </div>
                <p style="font-size: 1.1rem; margin-bottom: 2rem; color: var(--text-secondary);">${data.desc}</p>
                <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">
                ${data.details}
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // 4. Custom keyframes injected
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        .modal-detail-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }
        .detail-item h4 {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        .detail-item p {
            font-size: 0.9rem;
            color: var(--text-secondary);
        }
    `;
    document.head.appendChild(styleTag);
});
