(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const m=new IntersectionObserver(o=>{o.forEach((n,c)=>{n.isIntersecting&&setTimeout(()=>{n.target.classList.add("visible")},c*100)})},{threshold:.1});document.querySelectorAll(".section, .glass-card, .timeline-item").forEach(o=>{o.style.opacity="0",o.style.transform="translateY(30px)",o.style.transition="all 1s cubic-bezier(0.19, 1, 0.22, 1)",m.observe(o)});const i=document.querySelector(".cursor-blob");let a=0,s=0,e=0,t=0;document.addEventListener("mousemove",o=>{a=o.clientX,s=o.clientY});function r(){e+=(a-e)*.1,t+=(s-t)*.1,i&&(i.style.transform=`translate(${e-200}px, ${t-200}px)`),requestAnimationFrame(r)}r();const l=document.getElementById("project-modal"),u=document.getElementById("modal-body"),y=document.querySelector(".close-modal"),f={ddms:{title:"DDMS 智能配送管理 SaaS (2.0 AI版)",desc:"已覆盖 **180 个区域代理商**，深度集成 **京东到家、美团外卖** 订单分发接口，日订单规模 10w+。",tech:["Java 21","Spring Cloud","Netty","RocketMQ","Python FastAPI"],details:`
                <div class="modal-detail-grid">
                    <div class="detail-item">
                        <h4>多平台订单分发</h4>
                        <p>封装标准化开放联通网关，实现对美团、京东等三方平台订单的毫秒级解析与代理商自动分账。</p>
                    </div>
                    <div class="detail-item">
                        <h4>商业规模</h4>
                        <p>支撑全国 180+ 级代理商体系，具备极强的多租户资源隔离与结算风控能力。</p>
                    </div>
                    <div class="detail-item">
                        <h4>高并发网关</h4>
                        <p>Netty + Protobuf 实现骑手位置每秒 10w+ 级接入，轨迹压缩率达 70%。</p>
                    </div>
                </div>
            `},kkb:{title:"话费权益订单风控引擎",desc:"支撑千万级业务流量。基于交易频率与假充率实现动态评分引擎。",tech:["Risk Engine","Redis","Fegin","Seata"],details:`
                <div class="modal-detail-grid">
                    <div class="detail-item">
                        <h4>动态风控</h4>
                        <p>实现基于交易习惯、成功率、假充率的 5 级风控评定，动态分配信用额度。</p>
                    </div>
                    <div class="detail-item">
                        <h4>性能优化</h4>
                        <p>通过多级缓存与 SQL 优化，风控校验延迟降低 60%。</p>
                    </div>
                </div>
            `},dow:{title:"供应链 AI 赋能中心",desc:"利用 Dify + RAG 架构落地 AI Agent 提效供应链决策。",tech:["Dify","Milvus","LLM","Python"],details:`
                <div class="modal-detail-grid">
                    <div class="detail-item">
                        <h4>AI 智能运维</h4>
                        <p>实现自然语言发布 K8s 应用，支撑 7x24h 需求波动智能预警。</p>
                    </div>
                </div>
            `},zhongtai:{title:"深能环保数智中台",desc:"集团级数据治理基石，主导 SQL 指标计算下推调优。",tech:["Flink","DataWorks","MySQL 8.0"],details:`
                <div class="modal-detail-grid">
                    <div class="detail-item">
                        <h4>查询调优</h4>
                        <p>攻克视图索引下推难题，将集团核心报表从 300s 优化至 1s。</p>
                    </div>
                </div>
            `}};document.querySelectorAll(".project-card").forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const c=o.getAttribute("data-project"),d=f[c];d&&(u.innerHTML=`
                <h2 style="color: var(--primary-color); margin-bottom: 1rem;">${d.title}</h2>
                <div class="modal-tech-stack" style="margin-bottom: 2rem;">
                    ${d.tech.map(v=>`<span class="badge" style="margin-right: 0.5rem; margin-bottom: 0.5rem; background: rgba(0,242,255,0.1); border: 1px solid var(--primary-color); padding: 2px 8px; border-radius: 4px;">${v}</span>`).join("")}
                </div>
                <p style="font-size: 1.1rem; margin-bottom: 2rem; color: var(--text-secondary);">${d.desc}</p>
                <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">
                ${d.details}
            `,l.style.display="block",document.body.style.overflow="hidden")})}),y.onclick=()=>{l.style.display="none",document.body.style.overflow="auto"},window.onclick=o=>{o.target===l&&(l.style.display="none",document.body.style.overflow="auto")};const p=document.createElement("style");p.innerHTML=`
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
    `,document.head.appendChild(p)});
