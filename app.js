const k8sQuestions = [
    {
        question: "What is the primary purpose of the Cloud Native Computing Foundation (CNCF)?",
        options: [
            "To provide cloud infrastructure services",
            "To foster the adoption of cloud native technologies and provide vendor-neutral governance",
            "To develop proprietary cloud solutions",
            "To certify cloud engineers"
        ],
        correct: 1
    },
    {
        question: "Which of the following is NOT a CNCF project maturity level?",
        options: [
            "Sandbox",
            "Incubating",
            "Graduated",
            "Certified"
        ],
        correct: 3
    },
    {
        question: "What does 'cloud native' primarily refer to?",
        options: [
            "Applications that only run in public clouds",
            "Applications designed to leverage cloud computing frameworks and run in dynamic environments",
            "Applications that use cloud storage",
            "Applications that are hosted by cloud providers"
        ],
        correct: 1
    },
    {
        question: "Which principle is fundamental to cloud native architecture?",
        options: [
            "Monolithic design",
            "Manual scaling",
            "Microservices and containerization",
            "Single point of failure"
        ],
        correct: 2
    },
    {
        question: "What is the main benefit of immutable infrastructure?",
        options: [
            "Servers can be modified in place",
            "Servers are replaced rather than modified, reducing configuration drift",
            "Servers require less maintenance",
            "Servers cost less to operate"
        ],
        correct: 1
    },
    {
        question: "Which technology is essential for implementing microservices architecture?",
        options: [
            "Virtual machines only",
            "Containers and orchestration platforms",
            "Shared databases",
            "Monolithic applications"
        ],
        correct: 1
    },
    {
        question: "What is the primary advantage of using containers over virtual machines?",
        options: [
            "Containers provide better isolation",
            "Containers are lighter weight and share the host OS kernel",
            "Containers are more secure",
            "Containers require less disk space"
        ],
        correct: 1
    },
    {
        question: "Which CNCF project is the standard for container orchestration?",
        options: [
            "Docker Swarm",
            "Kubernetes",
            "OpenShift",
            "Rancher"
        ],
        correct: 1
    },
    {
        question: "What is the primary purpose of service mesh technology?",
        options: [
            "To provide storage for microservices",
            "To manage service-to-service communication, security, and observability",
            "To deploy containers",
            "To manage databases"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a key principle of DevOps?",
        options: [
            "Separate development and operations teams",
            "Manual deployment processes",
            "Continuous integration and continuous deployment (CI/CD)",
            "Quarterly software releases"
        ],
        correct: 2
    },
    {
        question: "What does 'Infrastructure as Code' (IaC) mean?",
        options: [
            "Writing code to manage applications",
            "Managing infrastructure through code and version control",
            "Coding inside infrastructure",
            "Using infrastructure to write code"
        ],
        correct: 1
    },
    {
        question: "Which CNCF project is commonly used for monitoring and alerting?",
        options: [
            "Kubernetes",
            "Prometheus",
            "Envoy",
            "Jaeger"
        ],
        correct: 1
    },
    {
        question: "What is the primary benefit of using a container registry?",
        options: [
            "To run containers",
            "To store, manage, and distribute container images",
            "To monitor containers",
            "To secure containers"
        ],
        correct: 1
    },
    {
        question: "Which technology enables 'cattle, not pets' philosophy in infrastructure?",
        options: [
            "Manual server management",
            "Containerization and orchestration",
            "Physical servers",
            "Shared databases"
        ],
        correct: 1
    },
    {
        question: "What is the main purpose of observability in cloud native systems?",
        options: [
            "To prevent all errors",
            "To understand system behavior through metrics, logs, and traces",
            "To replace monitoring",
            "To reduce costs"
        ],
        correct: 1
    },
    {
        question: "Which security practice is essential for container security?",
        options: [
            "Running containers as root",
            "Using the latest tag for all images",
            "Scanning container images for vulnerabilities",
            "Sharing host network namespace"
        ],
        correct: 2
    },
    {
        question: "What is the purpose of a Software Bill of Materials (SBOM)?",
        options: [
            "To track software costs",
            "To provide an inventory of software components and dependencies",
            "To manage software licenses",
            "To document software features"
        ],
        correct: 1
    },
    {
        question: "Which principle is fundamental to Zero Trust security?",
        options: [
            "Trust but verify",
            "Never trust, always verify",
            "Trust internal networks",
            "Trust known users"
        ],
        correct: 1
    },
    {
        question: "What is the primary purpose of Pod Security Standards in Kubernetes?",
        options: [
            "To encrypt pod communication",
            "To define security policies for pod specifications",
            "To manage pod storage",
            "To schedule pods"
        ],
        correct: 1
    },
    {
        question: "Which tool is commonly used for policy enforcement in Kubernetes?",
        options: [
            "Docker",
            "Open Policy Agent (OPA)",
            "Jenkins",
            "Terraform"
        ],
        correct: 1
    },
    {
        question: "What is the main benefit of using secrets management in cloud native applications?",
        options: [
            "To store configuration data",
            "To securely store and manage sensitive information like passwords and API keys",
            "To manage application logs",
            "To monitor application performance"
        ],
        correct: 1
    },
    {
        question: "Which security scanning should be integrated into CI/CD pipelines?",
        options: [
            "Only runtime scanning",
            "Container image vulnerability scanning and static code analysis",
            "Manual security reviews only",
            "Network scanning only"
        ],
        correct: 1
    },
    {
        question: "What does 'shift-left' mean in cloud native security?",
        options: [
            "Moving security to the left side of the data center",
            "Integrating security practices early in the development lifecycle",
            "Using left-hand encryption",
            "Shifting workloads to different regions"
        ],
        correct: 1
    },
    {
        question: "Which technology is essential for implementing multi-tenancy in cloud native applications?",
        options: [
            "Shared databases",
            "Namespaces and role-based access control (RBAC)",
            "Single user accounts",
            "Shared storage"
        ],
        correct: 1
    },
    {
        question: "What is the primary purpose of network policies in Kubernetes?",
        options: [
            "To assign IP addresses",
            "To control traffic flow between pods",
            "To create load balancers",
            "To manage DNS resolution"
        ],
        correct: 1
    },
    {
        question: "Which practice helps ensure container image integrity?",
        options: [
            "Using unsigned images",
            "Cryptographic signing and verification of container images",
            "Using the latest tag",
            "Sharing base images"
        ],
        correct: 1
    },
    {
        question: "What is the main security risk of running containers with elevated privileges?",
        options: [
            "Slower performance",
            "Potential for container escape and host compromise",
            "Increased memory usage",
            "Network connectivity issues"
        ],
        correct: 1
    },
    {
        question: "Which CNCF project provides service mesh capabilities?",
        options: [
            "Kubernetes",
            "Envoy",
            "Prometheus",
            "Fluentd"
        ],
        correct: 1
    },
    {
        question: "What is the primary benefit of using admission controllers in Kubernetes?",
        options: [
            "To schedule pods",
            "To intercept and validate/mutate requests before they reach the API server",
            "To manage storage",
            "To handle networking"
        ],
        correct: 1
    },
    {
        question: "Which security measure helps prevent privilege escalation in containers?",
        options: [
            "Running containers as root",
            "Using non-root users and dropping capabilities",
            "Sharing host PID namespace",
            "Disabling security contexts"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of runtime security monitoring?",
        options: [
            "To scan container images",
            "To detect anomalous behavior and threats in running containers",
            "To manage container lifecycle",
            "To optimize performance"
        ],
        correct: 1
    },
    {
        question: "Which technology enables automated scaling in cloud native applications?",
        options: [
            "Manual intervention",
            "Horizontal Pod Autoscaler (HPA) and Vertical Pod Autoscaler (VPA)",
            "Fixed resource allocation",
            "Scheduled scaling"
        ],
        correct: 1
    },
    {
        question: "What is the main purpose of distributed tracing in microservices?",
        options: [
            "To monitor individual services",
            "To track requests across multiple services and understand system behavior",
            "To secure communications",
            "To manage storage"
        ],
        correct: 1
    },
    {
        question: "Which practice is essential for securing secrets in GitOps workflows?",
        options: [
            "Storing secrets in plain text in Git",
            "Using sealed secrets or external secret management systems",
            "Sharing secrets between teams",
            "Hardcoding secrets in applications"
        ],
        correct: 1
    },
    {
        question: "What is the primary benefit of using immutable container images?",
        options: [
            "Images can be modified after creation",
            "Images cannot be changed after creation, ensuring consistency and security",
            "Images require less storage",
            "Images run faster"
        ],
        correct: 1
    },
    {
        question: "Which CNCF project is designed for storing and distributing container images?",
        options: [
            "Harbor",
            "Kubernetes",
            "Prometheus",
            "Fluentd"
        ],
        correct: 0
    },
    {
        question: "What is the main security benefit of using minimal base images?",
        options: [
            "Faster startup times",
            "Reduced attack surface by minimizing unnecessary components",
            "Better performance",
            "Smaller storage requirements"
        ],
        correct: 1
    },
    {
        question: "Which technology is commonly used for implementing chaos engineering?",
        options: [
            "Load balancers",
            "Chaos Monkey and similar tools",
            "Monitoring systems",
            "Databases"
        ],
        correct: 1
    },
    {
        question: "What is the primary purpose of health checks in containerized applications?",
        options: [
            "To monitor resource usage",
            "To determine if an application is running correctly and ready to serve traffic",
            "To manage storage",
            "To handle networking"
        ],
        correct: 1
    },
    {
        question: "Which security practice helps protect against supply chain attacks?",
        options: [
            "Using any available packages",
            "Verifying software integrity and provenance through SBOMs and signatures",
            "Avoiding dependency management",
            "Using only internal tools"
        ],
        correct: 1
    },
    {
        question: "What is the main benefit of using declarative configuration management?",
        options: [
            "Imperative commands are easier",
            "Desired state is defined and the system converges to that state",
            "Manual configuration is preferred",
            "Scripts are more reliable"
        ],
        correct: 1
    },
    {
        question: "Which technology enables blue-green deployments in cloud native applications?",
        options: [
            "Manual deployment",
            "Load balancers and container orchestration platforms",
            "Shared databases",
            "Monolithic applications"
        ],
        correct: 1
    },
    {
        question: "What is the primary purpose of using namespaces in Kubernetes?",
        options: [
            "To improve performance",
            "To provide logical separation and multi-tenancy within a cluster",
            "To manage storage",
            "To handle networking"
        ],
        correct: 1
    },
    {
        question: "Which security measure is essential for protecting etcd in Kubernetes?",
        options: [
            "Using default configurations",
            "Enabling encryption at rest and in transit, plus restricting access",
            "Allowing anonymous access",
            "Disabling authentication"
        ],
        correct: 1
    },
    {
        question: "What is the main advantage of using container orchestration platforms?",
        options: [
            "Manual container management",
            "Automated deployment, scaling, and management of containerized applications",
            "Single container deployment",
            "Reduced automation"
        ],
        correct: 1
    },
    {
        question: "Which practice is essential for implementing defense in depth?",
        options: [
            "Using only one security control",
            "Implementing multiple layers of security controls",
            "Relying on perimeter security only",
            "Disabling security features"
        ],
        correct: 1
    },
    {
        question: "What is the primary benefit of using service accounts in Kubernetes?",
        options: [
            "To manage user logins",
            "To provide identity for pods and manage their permissions",
            "To store configuration data",
            "To handle networking"
        ],
        correct: 1
    },
    {
        question: "Which technology is commonly used for implementing GitOps?",
        options: [
            "FTP servers",
            "Git repositories with automated deployment tools like ArgoCD or Flux",
            "Manual deployment scripts",
            "Shared file systems"
        ],
        correct: 1
    },
    {
        question: "What is the main purpose of using security contexts in Kubernetes pods?",
        options: [
            "To encrypt network traffic",
            "To define privilege and access control settings for pods and containers",
            "To manage storage",
            "To handle DNS resolution"
        ],
        correct: 1
    },
    {
        question: "Which practice is essential for secure container image management?",
        options: [
            "Using images from untrusted sources",
            "Regularly updating base images and scanning for vulnerabilities",
            "Never updating images",
            "Using only root user images"
        ],
        correct: 1
    },
    {
        question: "What is the primary role of the kube-apiserver in the Kubernetes control plane?",
        options: [
            "To assign pods to available nodes",
            "To expose the Kubernetes API, serving as the frontend for the control plane",
            "To maintain the desired number of pod replicas",
            "To run containers on a node and manage their lifecycle"
        ],
        correct: 1
    },
    {
        question: "Which Kubernetes component runs reconciliation loops to move the cluster's current state towards the desired state?",
        options: [
            "kube-scheduler",
            "etcd",
            "kube-controller-manager",
            "kubelet"
        ],
        correct: 2
    },
    {
        question: "What is the purpose of a ConfigMap in Kubernetes?",
        options: [
            "To store sensitive information like passwords and API keys",
            "To store non-confidential configuration data as key-value pairs",
            "To define a set of rules for network traffic between pods",
            "To request persistent storage for a pod"
        ],
        correct: 1
    },
    {
        question: "In a pod definition, what is the difference between spec.containers.resources.requests and spec.containers.resources.limits?",
        options: [
            "requests are for storage, while limits are for CPU/memory",
            "requests guarantee the minimum resources for scheduling, while limits define the maximum the container can use",
            "requests define the maximum resources, while limits guarantee the minimum",
            "There is no functional difference; they are aliases"
        ],
        correct: 1
    },
    {
        question: "You are deploying a clustered database like Zookeeper, which requires stable network identifiers and dedicated storage per instance. Which Kubernetes workload object is most appropriate?",
        options: [
            "Deployment",
            "Job",
            "StatefulSet",
            "ReplicaSet"
        ],
        correct: 2
    },
    {
        question: "You need to deploy a monitoring agent that must run on every single node in your cluster to collect metrics. Which object should you use?",
        options: [
            "StatefulSet",
            "DaemonSet",
            "Deployment with a high replica count",
            "Job"
        ],
        correct: 1
    },
    {
        question: "Which probe type is used to determine if a container has started successfully but should be killed and restarted if it fails?",
        options: [
            "readinessProbe",
            "startupProbe",
            "livenessProbe",
            "healthinessProbe"
        ],
        correct: 2
    },
    {
        question: "What is the recommended approach for performing a rolling update with a Deployment?",
        options: [
            "Delete the old pods manually, then create new ones",
            "Update the container image tag in the Deployment manifest and apply it",
            "Scale the old ReplicaSet to 0, then scale a new ReplicaSet up",
            "Use a Job to manage the update process"
        ],
        correct: 1
    },
    {
        question: "What are Linux namespaces used for in the context of containers?",
        options: [
            "To limit the amount of CPU and memory a process can use",
            "To isolate a container's view of the system (e.g., processes, network, mounts)",
            "To provide a persistent key-value store for cluster data",
            "To manage access control for users and groups"
        ],
        correct: 1
    },
    {
        question: "What is the role of Linux cgroups (control groups) in containerization?",
        options: [
            "To provide a separate network stack for each container",
            "To manage and limit the resources (CPU, memory, I/O) a container can consume",
            "To define the security policies for a running container",
            "To package an application and its dependencies"
        ],
        correct: 1
    },
    {
        question: "Which kubectl command would you use to apply all manifest files from a directory named my-app?",
        options: [
            "kubectl run -f my-app",
            "kubectl create --all my-app",
            "kubectl apply -k my-app",
            "kubectl apply -f my-app"
        ],
        correct: 3
    },
    {
        question: "How do you view the logs of a running pod named api-pod-12345?",
        options: [
            "kubectl describe pod api-pod-12345",
            "kubectl get logs api-pod-12345",
            "kubectl logs api-pod-12345",
            "kubectl exec api-pod-12345 -- cat /var/log/app.log"
        ],
        correct: 2
    },
    {
        question: "You need to open an interactive shell (/bin/sh) inside a running container within the pod frontend-pod. Which command achieves this?",
        options: [
            "kubectl attach frontend-pod -i -t",
            "kubectl exec -it frontend-pod -- /bin/sh",
            "kubectl run shell --image=busybox --pod=frontend-pod",
            "kubectl port-forward frontend-pod 8080:80"
        ],
        correct: 1
    },
    {
        question: "What does the command kubectl get all -n kube-system do?",
        options: [
            "Lists every single Kubernetes object in the entire cluster",
            "Lists the most common resource types (pods, services, deployments, etc.) in the kube-system namespace",
            "Shows all namespaces in the cluster",
            "Gets all events for the kube-system namespace"
        ],
        correct: 1
    },
    {
        question: "How can you trigger an immediate rollout of a Deployment named my-api to apply recent ConfigMap changes, even if the pod spec itself hasn't changed?",
        options: [
            "kubectl rollout restart deployment/my-api",
            "kubectl scale deployment/my-api --replicas=0 && kubectl scale deployment/my-api --replicas=3",
            "kubectl apply deployment/my-api",
            "kubectl refresh deployment/my-api"
        ],
        correct: 0
    },
    {
        question: "Which kubectl command shows real-time CPU and memory usage of pods on your nodes?",
        options: [
            "kubectl stats",
            "kubectl top pod",
            "kubectl describe pod",
            "kubectl get pod -o wide"
        ],
        correct: 1
    },
    {
        question: "You want to temporarily stop all traffic to a pod for maintenance without deleting it. Which command is most suitable?",
        options: [
            "kubectl cordon pod my-pod",
            "kubectl drain pod my-pod",
            "Add a label like maintenance=true and adjust the Service selector",
            "kubectl stop pod my-pod"
        ],
        correct: 2
    },
    {
        question: "What is the purpose of the --record flag (now deprecated but concept is important) or using annotations when applying changes with kubectl?",
        options: [
            "To force the recreation of all pods",
            "To log the command in the API server's audit log for security",
            "To save the command used for the change, allowing for easier rollbacks and history inspection",
            "To record performance metrics for the deployment"
        ],
        correct: 2
    },
    {
        question: "Which command helps you understand the fields available for a Kubernetes object, like a Pod?",
        options: [
            "kubectl explain pod",
            "kubectl options pod",
            "kubectl api-resources --kind=Pod",
            "kubectl help pod"
        ],
        correct: 0
    },
    {
        question: "How would you forward traffic from your local machine on port 8080 to a pod named my-db on port 5432?",
        options: [
            "kubectl proxy pod/my-db 8080:5432",
            "kubectl exec pod/my-db --port=8080:5432",
            "kubectl port-forward pod/my-db 8080:5432",
            "kubectl connect pod/my-db 8080:5432"
        ],
        correct: 2
    },
    {
        question: "What is a Software Bill of Materials (SBOM)?",
        options: [
            "A list of all Kubernetes API objects deployed in a cluster",
            "A security policy defining allowed container behaviors",
            "A formal, machine-readable inventory of software components and dependencies in an application",
            "A financial report detailing the cost of cloud native infrastructure"
        ],
        correct: 2
    },
    {
        question: "Which tool is commonly used for generating SBOMs from container images?",
        options: [
            "kubelet",
            "OPA",
            "Syft or Trivy",
            "Helm"
        ],
        correct: 2
    },
    {
        question: "What is the primary purpose of Falco in a Kubernetes environment?",
        options: [
            "To scan container images for known vulnerabilities (CVEs)",
            "To enforce network policies between pods",
            "To act as a runtime security tool that detects anomalous behavior inside containers",
            "To manage TLS certificates for Ingress"
        ],
        correct: 2
    },
    {
        question: "The \"4 Cs of Cloud Native Security\" are Cloud, Cluster, Container, and Code. At which layer would you focus on hardening the host OS and configuring kubelet security?",
        options: [
            "Cloud",
            "Cluster",
            "Container",
            "Code"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of using a tool like cosign (part of the sigstore project)?",
        options: [
            "To encrypt secrets before storing them in Git",
            "To scan for hardcoded secrets in source code",
            "To cryptographically sign and verify container images to ensure their authenticity",
            "To manage user roles and permissions (RBAC)"
        ],
        correct: 2
    },
    {
        question: "What is a key recommendation from the CIS (Center for Internet Security) Benchmark for hardening Kubernetes nodes?",
        options: [
            "Granting all users cluster-admin access for simplicity",
            "Disabling audit logging to improve performance",
            "Ensuring that the kubelet configuration has restrictive permissions and disables anonymous auth",
            "Running all container workloads as the root user"
        ],
        correct: 2
    },
    {
        question: "You want to implement a policy that prevents any container from running with the allowPrivilegeEscalation flag set to true. Which Kubernetes feature would you use?",
        options: [
            "NetworkPolicy",
            "Pod Security Standards (or a policy engine like OPA/Kyverno)",
            "ResourceQuota",
            "LimitRange"
        ],
        correct: 1
    },
    {
        question: "Which of the following is the BEST way to manage database credentials for an application deployed in Kubernetes?",
        options: [
            "Hardcode the credentials as environment variables in the Deployment manifest",
            "Store the credentials in a ConfigMap and mount it into the pod",
            "Store the credentials in a Kubernetes Secret and mount it as a volume or environment variable",
            "Write the credentials to the container image layer"
        ],
        correct: 2
    },
    {
        question: "What is the primary risk of running a container with a mounted Docker socket (docker.sock)?",
        options: [
            "It may slightly increase disk I/O",
            "It allows the container to communicate with the host's Docker daemon, enabling a container escape",
            "It prevents the use of readiness probes",
            "It consumes a large amount of memory"
        ],
        correct: 1
    },
    {
        question: "In Kubernetes audit logs, which stage (RequestReceived, ResponseStarted, etc.) is most useful for seeing the final outcome of an API request?",
        options: [
            "RequestReceived",
            "ResponseComplete",
            "Panic",
            "RequestStarted"
        ],
        correct: 1
    },
    {
        question: "A NetworkPolicy is defined to deny all ingress traffic to a group of pods by default. How would you write a rule to allow traffic ONLY from pods with the label app: monitoring?",
        options: [
            "ingress: from: - podSelector: matchLabels: { app: monitoring }",
            "egress: to: - podSelector: matchLabels: { app: monitoring }",
            "allow: from: pod: { app: monitoring }",
            "policyTypes: [Ingress] allow: [monitoring]"
        ],
        correct: 0
    },
    {
        question: "What is the difference between a Kubernetes Service of type ClusterIP and NodePort?",
        options: [
            "ClusterIP is external, NodePort is internal",
            "ClusterIP exposes the service on an internal IP, while NodePort also exposes it on a static port on each node",
            "ClusterIP provides load balancing, NodePort does not",
            "NodePort is the default type, ClusterIP must be specified"
        ],
        correct: 1
    },
    {
        question: "Which component is responsible for implementing NetworkPolicy rules in a Kubernetes cluster?",
        options: [
            "The kube-proxy",
            "The kube-scheduler",
            "The Container Network Interface (CNI) plugin (e.g., Calico, Cilium)",
            "The Ingress controller"
        ],
        correct: 2
    },
    {
        question: "What is the primary function of a service mesh like Istio or Linkerd?",
        options: [
            "To provide persistent storage for stateful applications",
            "To manage the deployment of container images",
            "To provide a dedicated infrastructure layer for secure, observable, and reliable service-to-service communication",
            "To scan container images for vulnerabilities"
        ],
        correct: 2
    },
    {
        question: "You have a pod that needs to connect to an external database not running in the cluster. Which Kubernetes object can you create to represent this external service so pods can discover it via internal DNS?",
        options: [
            "A Service of type ExternalName",
            "An Ingress object pointing to the external IP",
            "A NetworkPolicy with an egress rule",
            "A StatefulSet configured with the external address"
        ],
        correct: 0
    },
    {
        question: "What is mTLS (mutual TLS) in the context of a service mesh?",
        options: [
            "A method for terminating external TLS at the Ingress",
            "A process where both the client and server present and validate certificates to establish a secure, encrypted connection",
            "A way to automatically scale pods based on traffic",
            "A policy for managing storage access"
        ],
        correct: 1
    },
    {
        question: "An Ingress rule is not working. Which of the following is NOT a likely cause?",
        options: [
            "The Ingress controller is not running or is misconfigured",
            "The backend Service specified in the Ingress rule does not exist or has no active endpoints",
            "The kube-scheduler failed to assign the Ingress pod to a node",
            "A NetworkPolicy is blocking traffic from the Ingress controller to the backend pods"
        ],
        correct: 2
    },
    {
        question: "You want to deny all traffic leaving your pods (egress), except for traffic to the internal DNS server. What is the best way to achieve this?",
        options: [
            "Delete the default gateway on all pods",
            "Create a default-deny NetworkPolicy for egress and add a specific rule to allow traffic to kube-dns",
            "Use a Service Mesh to block all outgoing traffic",
            "Configure iptables manually on every node"
        ],
        correct: 1
    },
    {
        question: "What type of Kubernetes Service is typically used to expose an application to the internet via a cloud provider's hardware load balancer?",
        options: [
            "ClusterIP",
            "NodePort",
            "LoadBalancer",
            "ExternalName"
        ],
        correct: 2
    },
    {
        question: "What is the purpose of the Container Network Interface (CNI)?",
        options: [
            "To define a standard for how container runtimes interact with network providers",
            "To scan network traffic for vulnerabilities",
            "To provide a service discovery mechanism",
            "To manage Ingress traffic"
        ],
        correct: 0
    },
    {
        question: "Which CNCF project is primarily focused on collecting, processing, and alerting on time-series data and metrics?",
        options: [
            "Jaeger",
            "Fluentd",
            "Prometheus",
            "Open Policy Agent (OPA)"
        ],
        correct: 2
    },
    {
        question: "In the context of the 12-Factor App methodology, how should application configuration be handled?",
        options: [
            "Compiled into the application binary",
            "Stored in a file within the container image",
            "Stored in the environment (e.g., via environment variables or ConfigMaps)",
            "Managed by the end-user through a UI"
        ],
        correct: 2
    },
    {
        question: "What is the main principle of \"Immutable Infrastructure\"?",
        options: [
            "Servers are never modified after they are deployed; they are replaced with new ones",
            "Infrastructure components are constantly updated and patched in-place",
            "The number of servers in a cluster can never change",
            "Configuration is managed manually by system administrators"
        ],
        correct: 0
    },
    {
        question: "Which CNCF project is a GitOps continuous delivery tool for Kubernetes?",
        options: [
            "Helm",
            "Argo CD",
            "Jenkins",
            "gRPC"
        ],
        correct: 1
    },
    {
        question: "Which of these correctly describes the CNCF project maturity levels, from least to most mature?",
        options: [
            "Graduated -> Incubating -> Sandbox",
            "Sandbox -> Incubating -> Graduated",
            "Archived -> Sandbox -> Graduated",
            "Incubating -> Sandbox -> Graduated"
        ],
        correct: 1
    },
    {
        question: "What is the primary purpose of a tool like Helm?",
        options: [
            "To provide a runtime for containers",
            "To enforce security policies on a cluster",
            "To act as a package manager for Kubernetes, simplifying the deployment of applications",
            "To provide distributed tracing for microservices"
        ],
        correct: 2
    },
    {
        question: "What best describes the concept of \"declarative configuration\" in Kubernetes?",
        options: [
            "You provide a series of commands to execute to reach a desired state",
            "You define the desired state in a manifest file, and Kubernetes works to achieve that state",
            "You configure the cluster through a graphical user interface",
            "You write a script that directly interacts with the etcd database"
        ],
        correct: 1
    },
    {
        question: "Which CNCF project is a unified logging layer for cloud native environments?",
        options: [
            "Prometheus",
            "Kubernetes",
            "Jaeger",
            "Fluentd"
        ],
        correct: 3
    },
    {
        question: "What is a key benefit of using a container image registry?",
        options: [
            "It automatically scales your application pods",
            "It provides a centralized location to store, version, and distribute container images",
            "It enforces network security policies",
            "It runs your container workloads"
        ],
        correct: 1
    },
    {
        question: "In a Dockerfile, what is the difference between the RUN and CMD instructions?",
        options: [
            "RUN executes when building the image; CMD specifies the default command to run when starting a container",
            "CMD executes when building the image; RUN specifies the default command to run when starting a container",
            "Both are executed when a container starts, but RUN has higher priority",
            "RUN is for installing packages; CMD is for configuring the network"
        ],
        correct: 0
    },
    {
        question: "What is cloud native computing according to CNCF?",
        options: [
            "Running applications only in public clouds",
            "Building and running scalable applications in modern, dynamic environments",
            "Using only container technology",
            "Avoiding on-premises infrastructure"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a key characteristic of microservices architecture?",
        options: [
            "Single shared database for all services",
            "Services communicate through function calls",
            "Each service is independently deployable",
            "All services must use the same programming language"
        ],
        correct: 2
    },
    {
        question: "What is the purpose of an Ingress Controller in Kubernetes?",
        options: [
            "To manage ingress traffic and implement routing rules",
            "To control pod creation",
            "To manage storage volumes",
            "To schedule pods on nodes"
        ],
        correct: 0
    },
    {
        question: "Which security scanning should be integrated into CI/CD pipelines?",
        options: [
            "Only runtime scanning",
            "Container image vulnerability scanning",
            "Manual code review only",
            "Network scanning only"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of Network Policies in Kubernetes?",
        options: [
            "To assign IP addresses to pods",
            "To control traffic flow between pods",
            "To create load balancers",
            "To manage DNS resolution"
        ],
        correct: 1
    },
    {
        question: "Which component manages the lifecycle of containers in Kubernetes?",
        options: [
            "kube-scheduler",
            "kube-proxy",
            "kubelet",
            "etcd"
        ],
        correct: 2
    },
    {
        question: "What is GitOps?",
        options: [
            "A Git branching strategy",
            "Using Git as the source of truth for declarative infrastructure",
            "A Git hosting service",
            "A continuous integration tool"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a container runtime interface (CRI) compliant runtime?",
        options: [
            "Docker Engine only",
            "containerd",
            "systemd",
            "iptables"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of a mutating admission webhook?",
        options: [
            "To reject invalid requests",
            "To modify objects before they are persisted",
            "To delete resources",
            "To monitor cluster events"
        ],
        correct: 1
    },
    {
        question: "Which practice helps prevent privilege escalation in containers?",
        options: [
            "Running containers as root",
            "Disabling SELinux/AppArmor",
            "Using non-root users in containers",
            "Allowing all capabilities"
        ],
        correct: 2
    },
    {
        question: "What is observability in cloud native applications?",
        options: [
            "Only collecting logs",
            "The ability to understand system state through metrics, logs, and traces",
            "Just monitoring uptime",
            "Only tracking errors"
        ],
        correct: 1
    },
    {
        question: "Which Kubernetes resource type is best for stateful applications?",
        options: [
            "Deployment",
            "DaemonSet",
            "StatefulSet",
            "ReplicaSet"
        ],
        correct: 2
    },
    {
        question: "What does 'defense in depth' mean in Kubernetes security?",
        options: [
            "Using only one strong security measure",
            "Implementing multiple layers of security controls",
            "Focusing only on network security",
            "Relying on cloud provider security"
        ],
        correct: 1
    },
    {
        question: "Which tool is commonly used for policy enforcement in Kubernetes?",
        options: [
            "Open Policy Agent (OPA)",
            "Jenkins",
            "Terraform",
            "Ansible"
        ],
        correct: 0
    },
    {
        question: "What is the purpose of horizontal pod autoscaling (HPA)?",
        options: [
            "To increase pod memory limits",
            "To automatically scale pod replicas based on metrics",
            "To upgrade pod versions",
            "To move pods between nodes"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a cloud native storage solution?",
        options: [
            "Local hard drives only",
            "CSI (Container Storage Interface) drivers",
            "USB drives",
            "Tape backup"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of a ValidatingAdmissionWebhook?",
        options: [
            "To modify incoming requests",
            "To validate and potentially reject requests",
            "To create new resources",
            "To delete old resources"
        ],
        correct: 1
    },
    {
        question: "Which security measure protects against container escape attacks?",
        options: [
            "Using privileged containers",
            "Disabling seccomp profiles",
            "Enabling security profiles like AppArmor or SELinux",
            "Sharing host PID namespace"
        ],
        correct: 2
    },
    {
        question: "What is service discovery in Kubernetes?",
        options: [
            "Finding lost pods",
            "Automatic detection and connection to services using DNS or environment variables",
            "Discovering new features",
            "Finding security vulnerabilities"
        ],
        correct: 1
    },
    {
        question: "Which CNCF project provides distributed tracing?",
        options: [
            "Prometheus",
            "Fluentd",
            "Jaeger",
            "Helm"
        ],
        correct: 2
    },
    {
        question: "What is the recommended way to handle secrets in GitOps?",
        options: [
            "Commit secrets directly to Git",
            "Use sealed secrets or external secret operators",
            "Store secrets in ConfigMaps",
            "Hard-code secrets in applications"
        ],
        correct: 1
    },
    {
        question: "Which Kubernetes object provides a way to automatically mount credentials?",
        options: [
            "ConfigMap",
            "ServiceAccount",
            "Deployment",
            "PersistentVolume"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of Pod Disruption Budgets (PDB)?",
        options: [
            "To limit pod resource usage",
            "To ensure minimum availability during voluntary disruptions",
            "To schedule pod deletions",
            "To manage pod costs"
        ],
        correct: 1
    },
    {
        question: "Which practice is essential for container image security?",
        options: [
            "Using latest tags in production",
            "Building images from untrusted base images",
            "Regularly updating base images and dependencies",
            "Disabling image scanning"
        ],
        correct: 2
    },
    {
        question: "What is the role of etcd in Kubernetes?",
        options: [
            "Container runtime",
            "Consistent and highly-available key-value store for cluster data",
            "Load balancer",
            "Log aggregator"
        ],
        correct: 1
    },
    {
        question: "What is the primary role of the kube-scheduler in Kubernetes?",
        options: [
            "To manage network policies",
            "To assign pods to nodes based on resource requirements and constraints",
            "To monitor cluster health",
            "To manage persistent volumes"
        ],
        correct: 1
    },
    {
        question: "Which Kubernetes object would you use to ensure that a pod is running on every node in the cluster?",
        options: [
            "Deployment",
            "ReplicaSet",
            "DaemonSet",
            "StatefulSet"
        ],
        correct: 2
    },
    {
        question: "What is the default namespace in Kubernetes?",
        options: [
            "kube-system",
            "default",
            "kube-public",
            "kubernetes-dashboard"
        ],
        correct: 1
    },
    {
        question: "Which command would you use to scale a deployment named 'web-app' to 5 replicas?",
        options: [
            "kubectl scale deployment web-app --replicas=5",
            "kubectl resize deployment web-app --count=5",
            "kubectl update deployment web-app --replicas=5",
            "kubectl set replicas deployment web-app 5"
        ],
        correct: 0
    },
    {
        question: "What is the purpose of a Service in Kubernetes?",
        options: [
            "To store configuration data",
            "To provide persistent storage",
            "To expose pods and provide load balancing",
            "To manage secrets"
        ],
        correct: 2
    },
    {
        question: "Which Kubernetes resource would you use to store sensitive information like passwords?",
        options: [
            "ConfigMap",
            "Secret",
            "PersistentVolume",
            "ServiceAccount"
        ],
        correct: 1
    },
    {
        question: "What is the difference between a ReplicaSet and a Deployment?",
        options: [
            "ReplicaSet provides rolling updates, Deployment doesn't",
            "Deployment provides rolling updates and rollback, ReplicaSet only maintains pod replicas",
            "They are the same thing",
            "ReplicaSet is newer than Deployment"
        ],
        correct: 1
    },
    {
        question: "Which probe would you use to determine if a container is ready to accept traffic?",
        options: [
            "livenessProbe",
            "readinessProbe",
            "startupProbe",
            "healthProbe"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of a PersistentVolumeClaim (PVC)?",
        options: [
            "To create a new storage device",
            "To request storage resources from available PersistentVolumes",
            "To backup data",
            "To share data between nodes"
        ],
        correct: 1
    },
    {
        question: "Which network policy rule would allow traffic only from pods with label 'app=frontend'?",
        options: [
            "podSelector: matchLabels: app: frontend",
            "from: - podSelector: matchLabels: app: frontend",
            "ingress: - from: app: frontend",
            "selector: pods: app=frontend"
        ],
        correct: 1
    },
    {
        question: "What is the Cloud Native Computing Foundation (CNCF)?",
        options: [
            "A cloud provider company",
            "An open source software foundation that hosts cloud native projects like Kubernetes",
            "A certification body for cloud engineers",
            "A container runtime"
        ],
        correct: 1
    },
    {
        question: "Which of the following is NOT a CNCF graduated project?",
        options: [
            "Kubernetes",
            "Prometheus",
            "Docker",
            "Envoy"
        ],
        correct: 2
    },
    {
        question: "What is the principle of least privilege in Kubernetes security?",
        options: [
            "Giving users and applications only the minimum permissions they need",
            "Using the root user for all operations",
            "Allowing all pods to access all resources",
            "Disabling all security features"
        ],
        correct: 0
    },
    {
        question: "Which Kubernetes component is responsible for managing certificates?",
        options: [
            "kube-proxy",
            "cert-manager (a common add-on)",
            "kubelet",
            "kube-dns"
        ],
        correct: 1
    },
    {
        question: "What is Role-Based Access Control (RBAC) in Kubernetes?",
        options: [
            "A network policy system",
            "A method for regulating access to resources based on user roles",
            "A pod scheduling algorithm",
            "A storage class type"
        ],
        correct: 1
    },
    {
        question: "Which command would you use to check RBAC permissions for a user?",
        options: [
            "kubectl get permissions",
            "kubectl auth can-i",
            "kubectl check rbac",
            "kubectl list roles"
        ],
        correct: 1
    },
    {
        question: "What is a Pod Security Policy (deprecated) or Pod Security Standards?",
        options: [
            "A firewall for pods",
            "Controls security-sensitive aspects of pod specification",
            "A VPN for pod communication",
            "A backup policy for pods"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a cloud native principle?",
        options: [
            "Monolithic architecture",
            "Manual scaling",
            "Containerization and microservices",
            "Single point of failure"
        ],
        correct: 2
    },
    {
        question: "What is the purpose of a Security Context in Kubernetes?",
        options: [
            "To encrypt network traffic",
            "To define privilege and access control settings for pods/containers",
            "To store passwords",
            "To monitor security events"
        ],
        correct: 1
    },
    {
        question: "Which tool is commonly used for scanning container images for vulnerabilities?",
        options: [
            "kubectl",
            "Trivy or Clair",
            "docker build",
            "helm"
        ],
        correct: 1
    },
    {
        question: "What is the 12-factor app methodology?",
        options: [
            "A Kubernetes deployment strategy",
            "A methodology for building cloud native applications",
            "A security framework",
            "A container runtime"
        ],
        correct: 1
    },
    {
        question: "What is a Service Mesh in cloud native architecture?",
        options: [
            "A type of LoadBalancer",
            "Infrastructure layer for service-to-service communication",
            "A container network interface",
            "A storage solution"
        ],
        correct: 1
    },
    {
        question: "Which of these is a best practice for Kubernetes security?",
        options: [
            "Run containers as root user",
            "Disable network policies",
            "Enable audit logging",
            "Use latest tag for all images"
        ],
        correct: 2
    },
    {
        question: "What is the purpose of admission controllers in Kubernetes?",
        options: [
            "To admit users to the cluster",
            "To intercept requests to the API server and enforce policies",
            "To control pod scheduling",
            "To manage cluster upgrades"
        ],
        correct: 1
    },
    {
        question: "What does 'shift-left' mean in cloud native security?",
        options: [
            "Moving servers to the left side of the data center",
            "Integrating security practices early in the development lifecycle",
            "Using left-hand encryption",
            "Shifting workloads to different regions"
        ],
        correct: 1
    }
];

class K8sQuiz {
    constructor() {
        this.questions = k8sQuestions;
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.confidenceScores = [];
        this.init();
    }

    init() {
        this.startBtn = document.getElementById('start-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.submitBtn = document.getElementById('submit-btn');
        this.restartBtn = document.getElementById('restart-btn');
        
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultScreen = document.getElementById('result-screen');
        
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.questionCounter = document.getElementById('question-counter');
        this.scoreDisplay = document.getElementById('score');
        
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.prevBtn.addEventListener('click', () => this.prevQuestion());
        this.submitBtn.addEventListener('click', () => this.submitQuiz());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
    }

    startQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.confidenceScores = new Array(this.questions.length).fill(null);
        this.optionMappings = {}; // Reset option mappings for new quiz
        
        this.startScreen.classList.remove('active');
        this.quizScreen.classList.add('active');
        
        this.displayQuestion();
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        this.questionText.textContent = question.question;
        
        // Create array of indices and shuffle them
        const indices = Array.from({length: question.options.length}, (_, i) => i);
        const shuffledIndices = this.shuffleArray([...indices]);
        
        // Store the mapping for this question if not already stored
        if (!this.optionMappings) {
            this.optionMappings = {};
        }
        if (!this.optionMappings[this.currentQuestion]) {
            this.optionMappings[this.currentQuestion] = shuffledIndices;
        } else {
            // Use existing mapping if returning to question
            shuffledIndices.splice(0, shuffledIndices.length, ...this.optionMappings[this.currentQuestion]);
        }
        
        this.optionsContainer.innerHTML = '';
        shuffledIndices.forEach((originalIndex, displayIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = question.options[originalIndex];
            
            // If question hasn't been answered yet, allow clicking
            if (this.userAnswers[this.currentQuestion] === null) {
                optionDiv.addEventListener('click', () => this.selectOption(originalIndex));
            } else {
                // Question already answered, show feedback and disable
                optionDiv.classList.add('disabled');
                const userAnswer = this.userAnswers[this.currentQuestion];
                const correctAnswer = question.correct;
                
                if (originalIndex === userAnswer) {
                    // This is the user's selected answer
                    if (userAnswer === correctAnswer) {
                        optionDiv.classList.add('correct');
                    } else {
                        optionDiv.classList.add('incorrect');
                    }
                } else if (originalIndex === correctAnswer) {
                    // This is the correct answer
                    optionDiv.classList.add('correct');
                }
            }
            
            this.optionsContainer.appendChild(optionDiv);
        });
        
        // Restore confidence selection if returning to a question
        const savedConfidence = this.confidenceScores[this.currentQuestion];
        if (savedConfidence !== null) {
            const confidenceRadio = document.querySelector(`input[name="confidence"][value="${savedConfidence}"]`);
            if (confidenceRadio) {
                confidenceRadio.checked = true;
            }
        } else {
            // Clear confidence selection for new questions
            document.querySelectorAll('input[name="confidence"]').forEach(radio => {
                radio.checked = false;
            });
        }
        
        // Add confidence change listener
        document.querySelectorAll('input[name="confidence"]').forEach(radio => {
            radio.removeEventListener('change', this.handleConfidenceChange);
            radio.addEventListener('change', (e) => this.handleConfidenceChange(e));
        });
        
        this.updateNavigationButtons();
        this.updateQuestionCounter();
        this.updateScore();
    }
    
    handleConfidenceChange(e) {
        this.confidenceScores[this.currentQuestion] = parseInt(e.target.value);
        this.updateNavigationButtons();
    }

    selectOption(index) {
        this.userAnswers[this.currentQuestion] = index;
        
        // Find the display position of the selected original index
        const shuffledIndices = this.optionMappings[this.currentQuestion];
        const displayIndex = shuffledIndices.indexOf(index);
        const correctIndex = this.questions[this.currentQuestion].correct;
        const correctDisplayIndex = shuffledIndices.indexOf(correctIndex);
        
        document.querySelectorAll('.option').forEach((option, i) => {
            option.classList.remove('selected', 'correct', 'incorrect');
            option.classList.add('disabled');
            
            if (i === displayIndex) {
                // Show if selected answer is correct or incorrect
                if (index === correctIndex) {
                    option.classList.add('correct');
                } else {
                    option.classList.add('incorrect');
                }
            } else if (i === correctDisplayIndex) {
                // Always show the correct answer
                option.classList.add('correct');
            }
        });
        
        this.updateScore();
        this.updateNavigationButtons();
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
        }
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.displayQuestion();
        }
    }

    updateNavigationButtons() {
        this.prevBtn.disabled = this.currentQuestion === 0;
        
        // Enable next button only if both answer and confidence are selected
        const hasAnswer = this.userAnswers[this.currentQuestion] !== null;
        const hasConfidence = this.confidenceScores[this.currentQuestion] !== null;
        this.nextBtn.disabled = !hasAnswer || !hasConfidence;
        
        if (this.currentQuestion === this.questions.length - 1) {
            this.nextBtn.style.display = 'none';
            this.submitBtn.style.display = 'inline-block';
        } else {
            this.nextBtn.style.display = 'inline-block';
            this.submitBtn.style.display = 'none';
        }
        
        this.updateSubmitButton();
    }

    updateSubmitButton() {
        const allAnswered = this.userAnswers.every(answer => answer !== null);
        const allConfidenceScored = this.confidenceScores.every(score => score !== null);
        this.submitBtn.disabled = !allAnswered || !allConfidenceScored;
    }

    updateQuestionCounter() {
        this.questionCounter.textContent = `Question ${this.currentQuestion + 1} of ${this.questions.length}`;
    }

    updateScore() {
        // Calculate current score based on answered questions
        let currentScore = 0;
        this.questions.forEach((question, index) => {
            if (this.userAnswers[index] !== null && this.userAnswers[index] === question.correct) {
                currentScore++;
            }
        });
        this.score = currentScore;
        this.scoreDisplay.textContent = `Score: ${this.score}`;
    }

    submitQuiz() {
        this.calculateScore();
        this.showResults();
    }

    calculateScore() {
        this.score = 0;
        this.questions.forEach((question, index) => {
            if (this.userAnswers[index] === question.correct) {
                this.score++;
            }
        });
    }

    showResults() {
        this.quizScreen.classList.remove('active');
        this.resultScreen.classList.add('active');
        
        const percentage = Math.round((this.score / this.questions.length) * 100);
        document.getElementById('final-score').textContent = percentage;
        
        // Calculate confidence statistics
        const confidenceStats = this.calculateConfidenceStats();
        
        const resultMessage = document.getElementById('result-message');
        let message = '';
        if (percentage >= 80) {
            message = "Excellent! You're well prepared for the K8s certification!";
        } else if (percentage >= 60) {
            message = "Good job! Keep practicing to improve your score.";
        } else {
            message = "Keep studying! Review the topics and try again.";
        }
        
        // Add confidence analysis
        message += `<br><br><strong>Confidence Analysis:</strong>`;
        message += `<div style="margin-top: 10px;">`;
        message += `<div><strong>Average confidence:</strong> ${confidenceStats.average.toFixed(1)}/3</div>`;
        message += `<div><strong>High confidence (3) accuracy:</strong> ${confidenceStats.highConfidenceCorrect}/${confidenceStats.highConfidenceTotal} (${confidenceStats.highConfidenceAccuracy}%)</div>`;
        message += `<div><strong>Low confidence (1) accuracy:</strong> ${confidenceStats.lowConfidenceCorrect}/${confidenceStats.lowConfidenceTotal} (${confidenceStats.lowConfidenceAccuracy}%)</div>`;
        message += `</div>`;
        
        resultMessage.innerHTML = message;
        
        this.displayAnswerReview();
    }
    
    calculateConfidenceStats() {
        let totalConfidence = 0;
        let highConfidenceCorrect = 0;
        let highConfidenceTotal = 0;
        let lowConfidenceCorrect = 0;
        let lowConfidenceTotal = 0;
        
        this.questions.forEach((question, index) => {
            const isCorrect = this.userAnswers[index] === question.correct;
            const confidence = this.confidenceScores[index];
            
            totalConfidence += confidence;
            
            if (confidence === 3) {
                highConfidenceTotal++;
                if (isCorrect) highConfidenceCorrect++;
            } else if (confidence === 1) {
                lowConfidenceTotal++;
                if (isCorrect) lowConfidenceCorrect++;
            }
        });
        
        return {
            average: totalConfidence / this.questions.length,
            highConfidenceCorrect,
            highConfidenceTotal,
            highConfidenceAccuracy: highConfidenceTotal > 0 ? Math.round((highConfidenceCorrect / highConfidenceTotal) * 100) : 0,
            lowConfidenceCorrect,
            lowConfidenceTotal,
            lowConfidenceAccuracy: lowConfidenceTotal > 0 ? Math.round((lowConfidenceCorrect / lowConfidenceTotal) * 100) : 0
        };
    }

    displayAnswerReview() {
        const reviewContainer = document.getElementById('answer-review');
        reviewContainer.innerHTML = '<h3>Answer Review:</h3>';
        
        this.questions.forEach((question, index) => {
            const reviewItem = document.createElement('div');
            const isCorrect = this.userAnswers[index] === question.correct;
            const confidence = this.confidenceScores[index];
            reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
            
            const confidenceText = confidence === 1 ? 'Guessing' : confidence === 2 ? 'Somewhat Sure' : 'Very Confident';
            
            reviewItem.innerHTML = `
                <div class="review-question">Q${index + 1}: ${question.question}</div>
                <div class="review-confidence">Confidence: ${confidenceText} (${confidence}/3)</div>
                <div class="review-answer">
                    <div class="user-answer">Your answer: ${question.options[this.userAnswers[index]]}</div>
                    ${!isCorrect ? `<div class="correct-answer">Correct answer: ${question.options[question.correct]}</div>` : ''}
                </div>
            `;
            
            reviewContainer.appendChild(reviewItem);
        });
    }

    restartQuiz() {
        this.resultScreen.classList.remove('active');
        this.startScreen.classList.add('active');
        this.scoreDisplay.textContent = 'Score: 0';
    }
    
    // Fisher-Yates shuffle algorithm
    shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new K8sQuiz();
});